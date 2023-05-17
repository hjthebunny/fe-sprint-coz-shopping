import React, { useState } from 'react';
import * as S from './style'
import '../../variables.css'
import { Modal } from '../Modal/Modal';

const Type = {
    CATEGORY: "Category",
    EXHIBITION: "Exhibition",
    PRODUCT: "Product",
    BRAND: "Brand"
};

const Product = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
        setIsOpen(!isOpen);
    };

    return (
        <S.ItemContainer >
            <S.ItemImg onClick={openModalHandler}><img src={product.type === Type.BRAND ? product.brand_image_url : product.image_url} alt={product.type === Type.BRAND ? product.brand_name : product.title} />
                {isOpen ? <Modal product={product} openModalHandler={openModalHandler} /> : null}
                <S.BookmarkIcon> <img src='../icon/bookmark_off.svg' alt='bookmark_off' /></S.BookmarkIcon></S.ItemImg>
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