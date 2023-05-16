import React from 'react';
import * as S from './style'
import '../../variables.css'

const Type = {
    CATEGORY: "Category",
    EXHIBITION: "Exhibition",
    PRODUCT: "Product",
    BRAND: "Brand"
};

const Product = ({ product }) => {
    return (
        <S.ItemContainer >
            <S.ItemImg><img src={product.type === Type.BRAND ? product.brand_image_url : product.image_url} alt={product.type === Type.BRAND ? product.brand_name : product.title} />
                <S.BookmarkIcon> <img src='../bookmark_off.svg' alt='bookmark_off' /></S.BookmarkIcon></S.ItemImg>
            <S.ContentWrapper>
                <S.ItemName>{product.type === Type.BRAND ? product.brand_name :
                    product.type === Type.CATEGORY ? "# " + product.title : product.title}</S.ItemName>
                <S.UpRight color={product.type === Type.PRODUCT ? 'var(--point-violet)' : 'var(--black)'}>
                    {product.type === Type.PRODUCT ? product.discountPercentage + "%" :
                        product.type === Type.BRAND ? "관심고객수" : null}</S.UpRight>
            </S.ContentWrapper>
            <S.DownLeft>{product.type === Type.PRODUCT ? product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원" : product.type === Type.BRAND ? product.follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : null}</S.DownLeft>
            <S.DownRight>{product.type === Type.EXHIBITION ? product.sub_title : null}</S.DownRight>
        </S.ItemContainer >
    )



}
export default Product;