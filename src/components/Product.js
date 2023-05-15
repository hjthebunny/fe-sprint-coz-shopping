import React from 'react';
import styled from 'styled-components';

export const ItemContainer = styled.li`
position: relative;
width: 264px;
height: 264px;
margin: 24px;
`;
export const ItemImg = styled.img`
height: 210px;
width: 264px;
border-radius: 12px;
`

export const ContentWrapper = styled.div`
margin: 6px;
display: flex;
`
export const ItemName = styled.div`
position: absolute;
left: 0%;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
color: #000000;
`;

export const UpRight = styled.div`
position: absolute;
right: 0%;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: right;
color: ${(props) => props.color}
`;

export const DownLeft = styled.div`
position: absolute;
right: 0%;
top: 90.91%;
bottom: 0%;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;

color: #000000;
`;

export const DownRight = styled(DownLeft)`
left:0`;


const Product = ({ product }) => {
    return (
        <ItemContainer >
            <ItemImg src={product.type === "Brand" ? product.brand_image_url : product.image_url} alt={product.type === "Brand" ? product.brand_name : product.title} />
            <ContentWrapper>
                <ItemName>{product.type === "Brand" ? product.brand_name : product.title}</ItemName>
                <UpRight color={product.type === "Product" ? "#452CDD" : "#000000"}>
                    {product.type === "Product" ? product.discountPercentage + "%" :
                        product.type === "Brand" ? "관심고객수" : null}</UpRight>
            </ContentWrapper>
            <DownLeft>{product.type === "Product" ? product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원" : product.type === "Brand" ? product.follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : null}</DownLeft>
            <DownRight>{product.type === "Exhibition" ? product.sub_title : null}</DownRight>
        </ItemContainer>
    )



}
export default Product;