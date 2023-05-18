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
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [stored, setStored] = useState([])

    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    const bookmarkHandler = () => {
        setIsBookmarked(!isBookmarked)
        if (!isBookmarked) {
            const dataArray = JSON.parse(localStorage.getItem('bookmark')) || [];
            dataArray.push(obj);
            localStorage.setItem('bookmark', JSON.stringify(dataArray))
        }
        else if (isBookmarked) {
            const dataArray = JSON.parse(localStorage.getItem('bookmark'));
            dataArray.pop(obj);
            localStorage.setItem('bookmark', JSON.stringify(dataArray))
        }
    };

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
        follower: product.follower
    }



    // useEffect(() => {
    //     setStored([...stored, obj])
    // }, [])
    // console.log(stored);


    // const addData = () => {
    //     const dataArray = JSON.parse(localStorage.getItem('bookmark')) || [];
    //     dataArray.push(obj);
    //     localStorage.setItem('bookmark', JSON.stringify(dataArray))
    //     // if (!JSON.parse(localStorage.getItem('bookmark'))) {

    //     // }
    //     // else {
    //     //     const newBookmark = JSON.parse(localStorage.getItem(('bookmark'))).push(obj);
    //     //     localStorage.setItem('bookmark', JSON.stringify(newBookmark))
    //     // }
    // }


    const removeItem = (product) => {
        window.localStorage.removeItem('bookmark')
    }

    return (

        <S.ItemContainer >
            <S.ItemImg onClick={openModalHandler}><img src={product.type === Type.BRAND ? product.brand_image_url : product.image_url} alt={product.type === Type.BRAND ? product.brand_name : product.title} />
                {isOpen ? <Modal product={product} openModalHandler={openModalHandler} isBookmarked={isBookmarked} bookmarkHandler={bookmarkHandler} /> : null}
                <S.BookmarkIconWrapper onClick={(event) => event.stopPropagation()}>
                    <S.BookmarkIcon onClick={bookmarkHandler} >
                        {!isBookmarked ? <img src='../icon/bookmark_off.svg' alt='bookmark_off' /> :
                            <img src='../icon/bookmark_on.svg' alt='bookmark_on' />}
                    </S.BookmarkIcon></S.BookmarkIconWrapper></S.ItemImg>
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