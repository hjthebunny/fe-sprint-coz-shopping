import globalToken from '../../../tokens/global.json';
import { styled } from 'styled-components';
import { useState } from 'react';

const { boxShadow } = globalToken;
const BookmarkIcon = styled.img`
filter:drop-shadow(${boxShadow.Icon.x.value}px ${boxShadow.Icon.y.value}px ${boxShadow.Icon.blur.value}px ${boxShadow.Icon.color.value} ) ;
cursor: pointer;
`;

export const Bookmark = ({ isOpen, icon, color, size, ...rest }) => {
    const [isBookmarked, setIsBookmarked] = useState(false)
    const bookmarkHandler = () => {
        setIsBookmarked(!isBookmarked)
    }
    const style = {
        width: size,
        height: size,
    };


    return (!isBookmarked ? <BookmarkIcon src='../../icon/bookmark_off.svg' onClick={bookmarkHandler} size={size} color={color} {...rest} isBookmarked={isBookmarked} style={style} /> :
        <BookmarkIcon src='../../icon/bookmark_on.svg' onClick={bookmarkHandler} size={size} color={color} {...rest} isBookmarked={true} style={style} />)
}

