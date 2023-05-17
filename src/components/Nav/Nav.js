import { Link } from "react-router-dom";
import * as S from "./style";


function Nav() {
  return (
    <S.DropdownContainer>
      <img src="../Polygon.svg" alt="polygon" />
      <S.Wrapper>
        <div>안현지님, 안녕하세요!</div>
        <div><Link to="/products/list"><img src="../icon/item.svg" alt="item" />상품리스트 페이지</Link></div>
        <div><Link to="/bookmark"><img src="../icon/bookmark.svg" alt="bookmark" />북마크 페이지</Link></div>
      </S.Wrapper>

    </S.DropdownContainer>
  )
}
export default Nav;