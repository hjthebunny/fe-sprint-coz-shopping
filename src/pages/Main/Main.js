import React from "react";
import Product from '../../components/Product/Product';
import * as S from './style'

const Main = ({ data, bookmarkData, bookmarkHandler }) => {
    return (
        <>
            <S.ProductListWrapper>
                <S.ListContainer>
                    <S.Title1>상품리스트</S.Title1>
                    <S.List>
                        {data && data.map((product) => (
                            <Product
                                product={product}
                                key={product.id}
                                isBookmarked={bookmarkData.some(item => item.id === product.id)}
                                bookmarkHandler={() => bookmarkHandler(product)}
                            />
                        ))}
                    </S.List>
                </S.ListContainer>
            </S.ProductListWrapper>
            <S.BookmarkListWrapper>
                <S.ListContainer>
                    <S.Title2>북마크리스트</S.Title2>
                    <S.List>
                        {bookmarkData &&
                            bookmarkData.slice(0, 4).map((product) => (
                                <Product
                                    product={product}
                                    key={product.id}
                                    isBookmarked={true}
                                    bookmarkHandler={() => bookmarkHandler(product)}
                                />
                            ))}
                    </S.List>
                </S.ListContainer>
            </S.BookmarkListWrapper>
        </>
    );
}

export default Main;
