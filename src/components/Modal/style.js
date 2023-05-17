import styled from 'styled-components'
import '../../variables.css'

export const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  position: fixed; 
  top: 0; bottom: 0; left: 0; right:0;
  background-color: rgba(0, 0, 0, 0.3);

  //모달창 중앙 정렬
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