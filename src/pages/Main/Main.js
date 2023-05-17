import React, { useState, useEffect } from "react";
import Product from '../../components/Product/Product';
import * as S from './style'
import axios from "axios";

const Main = () => {
    const [data, setData] = useState(null)


    useEffect(() => {

        axios.get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
            .then(res => setData(res.data))
            .catch(error => console.log(error))

    }, [])

    return (
        <S.ProductListWrapper>
            <S.ProductListContainer>
                <S.Title1>상품리스트</S.Title1>
                <S.ProductList >
                    {data && data.slice(0, 4).map((product) => <Product product={product} key={product.id} />)}
                </S.ProductList>
            </S.ProductListContainer>
        </S.ProductListWrapper>
    )
}

export default Main;