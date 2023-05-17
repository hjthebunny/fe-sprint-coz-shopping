
import styled from 'styled-components'

export const ProductList = styled.ul`
display:flex;
justify-content:center;
list-style:none;

margin: 26.5px 130px ;
flex-wrap: wrap;

>li:last-child {
  margin-right: auto;
  margin-left: 106px;
}
`

export const TabWrapper = styled.div`
display:flex;
justify-content:center;`;

export const TabMenu = styled.ul`

margin-top:24px;
color: rgba(73, 73, 73, 0.5);
font-weight: bold;
display: flex;
gap: 36px;
justify-content: center;
list-style: none;
cursor: pointer;
>li{
    display: flex;
    flex-direction: column;
   align-items: center;
}
  `
export const TabText = styled.div`
margin-top:6.5px ;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color:${(props) => props.focused ? '#412DD4' : '#000000'};
border-bottom: ${(prop) => prop.focused ? '2px solid #412DD4' : null};
  `
export const Desc = styled.div`
display:flex;
justify-content:center;
`;