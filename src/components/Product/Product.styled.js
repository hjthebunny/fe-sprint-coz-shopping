import styled from 'styled-components';
import '../../variables.css'

export const ItemContainer = styled.li`
position: relative;
width: 264px;
height: 264px;
margin: 0 24px;
`;
export const ItemImg = styled.div`
position:relative;
cursor: pointer;
>img{
height: 210px;
width: 264px;
border-radius: 12px
}
`;

export const BookmarkIconWrapper = styled.div`
`
export const BookmarkIcon = styled.div`
position: absolute;
right: 12px;
bottom: 12px;
>img{
    filter: drop-shadow(0px 5px 5px rgba(0,0,0, 0.1));
}

`
export const ContentWrapper = styled.div`
margin-top: 6px;
display: flex;
`
export const ItemName = styled.div`
position: absolute;
left: 0%;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
`;

export const UpRight = styled.div`
position: absolute;
right: 0%;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: right;
color: ${(props) => props.color}
`;

export const DownLeft = styled.div`
position: absolute;
right: 0%;
top: 90.91%;
bottom: 0%;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
margin-bottom: 12px;
`;

export const DownRight = styled(DownLeft)`
left:0%`;