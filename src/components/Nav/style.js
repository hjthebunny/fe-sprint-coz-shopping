import styled from "styled-components";
import '../../variables.css'

export const DropdownContainer = styled.div`
position: absolute;
z-index: 10;
width: 200px;
height: 172px;
left: 82.8%;
top: 50px;
filter: drop-shadow(0px 0px 8px var(--black-trans-100));
>img{
  position: absolute;
  left: 65%;
  right: 27%;
  top: 2.33%;
  bottom: 87.21%;
  }
  `;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
position: absolute;
left: 0%;
right: 0%;
top: 12.79%;
bottom: 0%;
background: var(--white);
border-radius: 12px;
>div{
  position: relative;
  width: 200px;
  height: 50px;
  border-bottom: 0.5px solid var(--black-trans-100);
  display: flex;
  align-items: center;
  justify-content: center;
  >a{
    text-decoration: none;
    color: var(--black);
    >img{
      margin-right: 8px;
    }
    }
&:last-child{
  border-bottom: 0px;
  right: 15px;
} 
} 
`;