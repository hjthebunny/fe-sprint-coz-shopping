import React, { useState, useEffect } from "react";
import Product from '../components/Product';
import styled from 'styled-components';


export const ProductList = styled.ul`
display:flex;
justify-content:center;
list-style:none;
padding-left:0px;
`

const Main = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <h1>상품리스트</h1>
            <ProductList >
                {data && data.slice(0, 4).map((product) => <Product product={product} key={product.id} />)}
            </ProductList>
        </>
    )
}

export default Main;