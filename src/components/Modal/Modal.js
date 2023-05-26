import React from 'react'
import * as S from './Modal.styled'
import { Type } from '../../Type';

export const Modal = ({ product, openModalHandler, isBookmarked, bookmarkHandler }) => {
    return (
        <S.ModalBackdrop  >
            <S.ModalImg>
                <img src={product.type === Type.BRAND ? product.brand_image_url : product.image_url} alt={product.type === Type.BRAND ? product.brand_name : product.title} onClick={(event) => event.stopPropagation()} />
                <S.ModalGradient></S.ModalGradient>
                <S.CloseBtn onClick={openModalHandler}>
                    <img src='../icon/round-close.svg' alt='closebutton' />
                </S.CloseBtn>
                <S.ItemWrapper>
                    <S.BookmarkIconWrapper onClick={bookmarkHandler}>
                        {!isBookmarked ? <img src='../icon/bookmark_off.svg' alt='bookmark_off' /> :
                            <img src='../icon/bookmark_on.svg' alt='bookmark_on' />}
                    </S.BookmarkIconWrapper>
                    <S.ItemName>{product.type === Type.BRAND ? product.brand_name :
                        product.type === Type.CATEGORY ? "# " + product.title : product.title}</S.ItemName>
                </S.ItemWrapper>
            </S.ModalImg>
        </S.ModalBackdrop>
    );
};
