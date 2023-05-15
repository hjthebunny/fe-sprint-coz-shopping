import { Link } from "react-router-dom";
import styled from "styled-components";

export const DropdownContainer = styled.div`
position: absolute;
z-index: 10;
  width: 200px;
  height: 172px;
  left: 82.8%;
  top: 50px;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
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
  background: #FFFFFF;
  border-radius: 12px;
  >div{
    position: relative;
    width: 200px;
    height: 50px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    >a{
      text-decoration: none;
      color: #000000;
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

function Nav() {
  return (
    <DropdownContainer>
      <img src="../Polygon.svg" alt="polygon" />
      <Wrapper>
        <div>안현지님, 안녕하세요!</div>
        <div><Link to="/products/list"><img src="../item.svg" alt="item" />상품리스트 페이지</Link></div>
        <div><Link to="/bookmark"><img src="../bookmark.svg" alt="bookmark" />북마크 페이지</Link></div>
      </Wrapper>

    </DropdownContainer>
  )
}
export default Nav;