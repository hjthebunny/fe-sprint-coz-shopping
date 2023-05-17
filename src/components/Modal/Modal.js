import React from 'react'
import * as S from './style'

const Type = {
    CATEGORY: "Category",
    EXHIBITION: "Exhibition",
    PRODUCT: "Product",
    BRAND: "Brand"
};

export const Modal = ({ product, openModalHandler }) => {
    return (

        //모달 배경
        <S.ModalBackdrop onClick={(event) => event.stopPropagation()} >
            <S.ModalImg>
                <img src={product.type === Type.BRAND ? product.brand_image_url : product.image_url} alt={product.type === Type.BRAND ? product.brand_name : product.title} onClick={(event) => event.stopPropagation()} />
                <S.CloseBtn onClick={openModalHandler}>
                    <img src='../icon/round-close.svg' alt='closebutton' />
                </S.CloseBtn>
                <S.ItemWrapper>
                    <img src='../icon/bookmark_off.svg' alt='bookmarkicon' />
                    <S.ItemName>{product.type === Type.BRAND ? product.brand_name :
                        product.type === Type.CATEGORY ? "# " + product.title : product.title}</S.ItemName>
                </S.ItemWrapper>
            </S.ModalImg>
        </S.ModalBackdrop>
    );
};
