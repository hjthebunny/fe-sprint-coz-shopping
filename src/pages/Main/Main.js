import React, { useState, useEffect } from "react";
import Product from '../../components/Product/Product';
import * as S from './Main.styled'
import axios from "axios";

const Main = () => {
    const [data, setData] = useState([])
    const [bookmarkData, setBookmarkData] = useState([])
    useEffect(() => {
        axios.get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
            .then(res => setData(res.data))
            .catch(error => console.log(error))

        const bookmarkData = JSON.parse(localStorage.getItem('bookmark')) || [];
        setBookmarkData(bookmarkData);
    }, [])

    const bookmarkHandler = (product) => {
        const updatedBookmarkData = [...bookmarkData];
        const index = updatedBookmarkData.findIndex(item => item.id === product.id);

        if (index === -1) {
            const obj = {
                id: product.id,
                type: product.type,
                title: product.title,
                sub_title: product.sub_title,
                brand_name: product.brand_name,
                price: product.price,
                discountPercentage: product.discountPercentage,
                image_url: product.image_url,
                brand_image_url: product.brand_image_url,
                follower: product.follower,
                isBookmarked: true,
            };
            updatedBookmarkData.push(obj);
        } else {
            updatedBookmarkData.splice(index, 1);
        }
        setBookmarkData(updatedBookmarkData);
        localStorage.setItem('bookmark', JSON.stringify(updatedBookmarkData));
    };
    return (
        <>
            <S.ProductListWrapper>
                <S.ListContainer>
                    <S.Title1>상품리스트</S.Title1>
                    <S.List>
                        {data && data.slice(0, 4).map((product) => (
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
