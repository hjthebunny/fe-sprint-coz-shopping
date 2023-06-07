import styled from 'styled-components';
export const ProductListWrapper = styled.div`
display:flex;
justify-content:center`

export const BookmarkListWrapper = styled.div`
display: flex;
justify-content: center;
`


export const ListContainer = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
`
export const Title1 = styled.h1`
margin-top: 52px;
margin-left: 24px;
width: 179px;
height: 38px;
display: flex;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
align-items: center;
`
export const Title2 = styled(Title1)`
margin-top: 0px`

export const List = styled.ul`
margin-top: 12px;
display:grid;
grid-template-columns: repeat(4, 1fr);
list-style:none;
padding-left:0px;
`