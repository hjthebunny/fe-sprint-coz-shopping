import React, { useState } from "react";
import products from '../static/dummyData';
import Product from '../components/Product';
import styled from 'styled-components';


export const ProductList = styled.ul`
display:flex;
justify-content:center;
list-style:none;
padding-left:0px;
`

const Main = () => {

    return (
        <>
            <h1>상품리스트</h1>
            <ProductList >
                {products.slice(0, 4).map((product) => <Product product={product} key={product.id} />)}
            </ProductList>
        </>
    )
}

export default Main;