import React, { useState, useEffect } from "react";
import Product from '../../components/Product/Product';

import axios from "axios";
import * as S from "./style";
const Type = {
    CATEGORY: "Category",
    EXHIBITION: "Exhibition",
    PRODUCT: "Product",
    BRAND: "Brand"
};

const ProductListPage = () => {
    const [currentTab, setCurrentTab] = useState(1);
    const [data, setData] = useState(null)
    useEffect(() => {

        axios.get("http://cozshopping.codestates-seb.link/api/v1/products")
            .then(res => setData(res.data))
            .catch(error => console.log(error))
    }, [])

    const all = data && data.map((product) => <Product product={product} key={product.id} />)
    const product = data && (data.filter(data => data.type === Type.PRODUCT)).map((product) => <Product product={product} key={product.id} />)
    const category = data && (data.filter(data => data.type === Type.CATEGORY)).map((product) => <Product product={product} key={product.id} />)
    const exhibition = data && (data.filter(data => data.type === Type.EXHIBITION)).map((product) => <Product product={product} key={product.id} />)
    const brand = data && (data.filter(data => data.type === Type.BRAND)).map((product) => <Product product={product} key={product.id} />)
    // console.log(product)
    console.log(data);
    const type = [
        { name: '전체', img: '../img/all.png', content: all },
        { name: '상품', img: '../img/brand.png', content: product },
        { name: '카테고리', img: '../img/category.png', content: category },
        { name: '기획전', img: '../img/exhibition.png', content: exhibition },
        { name: '브랜드', img: '../img/brand.png', content: brand }
    ]

    const selectMenuHandler = (index) => {
        setCurrentTab(index)
    };
    return (
        <>
            <S.TabMenu>
                {type.map((el, index) => {
                    return <li key={index}
                        onClick={() => selectMenuHandler(index)}>
                        <img src={el.img} alt={el.name} />
                        <S.TabText focused={index === currentTab ? 'focused' : null}>{el.name}</S.TabText>
                    </li>
                })}
            </S.TabMenu>
            <S.Desc>
                <S.ProductList>{type[currentTab].content}</S.ProductList>
            </S.Desc>
        </>
    )
    // const [data, setData] = useState(null)
    // useEffect(() => {

    //     axios.get("http://cozshopping.codestates-seb.link/api/v1/products")
    //         .then(res => setData(res.data))
    //         .catch(error => console.log(error))

    // }, [])

    // return (<ProductList>
    //     {data && data.map((product) => <Product product={product} key={product.id} />)}
    // </ProductList>
    // )
}

export default ProductListPage;