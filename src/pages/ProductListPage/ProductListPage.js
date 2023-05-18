import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import axios from "axios";
import * as S from "./style";
const Type = {
    CATEGORY: "Category",
    EXHIBITION: "Exhibition",
    PRODUCT: "Product",
    BRAND: "Brand"
};

const ProductListPage = ({ bookmarkHandler, bookmarkData, data }) => {
    const [currentTab, setCurrentTab] = useState(0);

    const all = data && data.map((product) => <Product product={product} key={product.id} bookmarkHandler={bookmarkHandler} isBookmarked={bookmarkData.some(item => item.id === product.id)} />)
    const product = data && (data.filter(data => data.type === Type.PRODUCT)).map((product) => <Product product={product} key={product.id} bookmarkHandler={bookmarkHandler} isBookmarked={bookmarkData.some(item => item.id === product.id)} />)
    const category = data && (data.filter(data => data.type === Type.CATEGORY)).map((product) => <Product product={product} key={product.id} bookmarkHandler={bookmarkHandler} isBookmarked={bookmarkData.some(item => item.id === product.id)} />)
    const exhibition = data && (data.filter(data => data.type === Type.EXHIBITION)).map((product) => <Product product={product} key={product.id} bookmarkHandler={bookmarkHandler} isBookmarked={bookmarkData.some(item => item.id === product.id)} />)
    const brand = data && (data.filter(data => data.type === Type.BRAND)).map((product) => <Product product={product} key={product.id} bookmarkHandler={bookmarkHandler} isBookmarked={bookmarkData.some(item => item.id === product.id)} />)

    const type = [
        { name: '전체', img: '../img/all.png', content: all },
        { name: '상품', img: '../img/product.png', content: product },
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
                        onClick={() => selectMenuHandler(index)} >
                        <img src={el.img} alt={el.name} />
                        <S.TabText focused={index === currentTab ? 'focused' : null}>{el.name}</S.TabText>
                    </li>
                })}
            </S.TabMenu>
            <S.Desc>

                {currentTab === 0 ?
                    <S.ProductListAll>{all}</S.ProductListAll> :
                    <S.ProductList>{type[currentTab].content}</S.ProductList>}
            </S.Desc>
        </>
    )
}

export default ProductListPage;