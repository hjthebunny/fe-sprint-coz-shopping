import styled from 'styled-components'

export const ProductList = styled.ul`
display:grid;
grid-template-columns: repeat(4, 1fr);
list-style:none;
margin: 26.5px 130px ;
`

export const TabWrapper = styled.div`
display: flex;
justify-content: center; `;

export const TabMenu = styled.ul`

margin-top: 24px;
color: rgba(73, 73, 73, 0.5);
font-weight: bold;
display: flex;
gap: 36px;
justify-content: center;
list-style: none;
cursor: pointer;
> li{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
export const TabText = styled.div`
margin-top: 6.5px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color:${(props) => props.focused ? '#412DD4' : '#000000'};
border-bottom: ${(props) => props.focused ? '3px solid #412DD4' : null};
transition:0.3s
`
export const Desc = styled.div`
display: flex;
justify-content: center;
`;