import styled from 'styled-components'
import '../../variables.css'

export const ModalBackdrop = styled.div`
  position: fixed; 
  top: 0; bottom: 0; left: 0; right:0;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const ModalImg = styled.div`
position: relative;
>img{
width: 744px;
height: 480px;
border: 1px solid var(--black-trans-100);
border-radius: 12px;
}
`
export const ModalGradient = styled.div`
width: 744px;
height: 240px;
position: absolute;
left: 0%;
right: 0%;
top: 50%;
border-radius: 12px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.5) 100%);
`

export const CloseBtn = styled.div`
position: absolute;
right: 24px;
top: 24px;
`;

export const ItemWrapper = styled.div`
position: absolute;
left: 24px;
bottom: 27px;
display: flex;
align-items: center;
`
export const ItemName = styled.div`
margin-left: 8px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
color: var(--white);
text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`