import styled from "styled-components";
import '../../variables.css'

export const TitleContainer = styled.div`
z-index: 1;
position: sticky;
width: 100%;
height: 80px;
box-shadow: 0px 8px 8px var(--black-trans-100);
display: flex;
align-items: center;
top: 0;
left:0;
background-color: var(--white);
`;

export const Title = styled.div`
display: flex;
align-items: center;
border: 1px solid gray;
cursor: pointer;
>img{
  position: absolute;
  left: 5.94%;
  right: 89.77%;
}
>h1{
  position: absolute;
  left: 11.7%;
  right: 70.86%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: var(--black) ;
}
`;

export const MenuBtn = styled.img`
width: 30px;
height: 20px;
position: absolute;
left: 90%;
right: 5.88%;
cursor: pointer;
`;