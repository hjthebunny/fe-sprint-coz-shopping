import React, { useState } from 'react';
import * as S from './style';
import '../../variables.css';
import { Modal } from '../Modal/Modal';

const Type = {
    CATEGORY: 'Category',
    EXHIBITION: 'Exhibition',
    PRODUCT: 'Product',
    BRAND: 'Brand'
};

const Product = ({ product, bookmarkHandler, isBookmarked }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    const handleBookmark = () => {
        bookmarkHandler(product);
    };

    if (!product || !product.type) {
        // Handle case when product prop is missing or invalid
        return null;
    }

    return (
        <S.ItemContainer>
            <S.ItemImg onClick={openModalHandler}>
                <img
                    src={
                        product.type === Type.BRAND
                            ? product.brand_image_url
                            : product.image_url
                    }
                    alt={
                        product.type === Type.BRAND
                            ? product.brand_name
                            : product.title
                    }
                />
                {isOpen && (
                    <Modal
                        product={product}
                        openModalHandler={openModalHandler}
                        isBookmarked={isBookmarked}
                        bookmarkHandler={handleBookmark}
                    />
                )}
                <S.BookmarkIconWrapper onClick={(event) => event.stopPropagation()}>
                    <S.BookmarkIcon onClick={handleBookmark}>
                        {!isBookmarked ? (
                            <img src="../icon/bookmark_off.svg" alt="bookmark_off" />
                        ) : (
                            <img src="../icon/bookmark_on.svg" alt="bookmark_on" />
                        )}
                    </S.BookmarkIcon>
                </S.BookmarkIconWrapper>
            </S.ItemImg>
            <S.ContentWrapper>
                <S.ItemName>
                    {product.type === Type.BRAND
                        ? product.brand_name
                        : product.type === Type.CATEGORY
                            ? '# ' + product.title
                            : product.title}
                </S.ItemName>
                <S.UpRight
                    color={
                        product.type === Type.PRODUCT
                            ? 'var(--point-violet)'
                            : 'var(--black)'
                    }
                >
                    {product.type === Type.PRODUCT
                        ? product.discountPercentage + '%'
                        : product.type === Type.BRAND
                            ? '관심고객수'
                            : null}
                </S.UpRight>
            </S.ContentWrapper>
            <S.DownLeft>
                {product.type === Type.PRODUCT
                    ? product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                    '원'
                    : product.type === Type.BRAND
                        ? product.follower
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        : null}
            </S.DownLeft>
            <S.DownRight>
                {product.type === Type.EXHIBITION ? product.sub_title : null}
            </S.DownRight>
        </S.ItemContainer>
    );
};

export default Product;
