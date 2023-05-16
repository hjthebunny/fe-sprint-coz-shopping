import { Link } from "react-router-dom";
import * as S from './style'
import Nav from "../Nav/Nav";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.TitleContainer>
        <Link to="/">
          <S.Title>
            <img src="../logo.png" alt="logo" />
            <h1>COZ Shopping</h1>
          </S.Title>
        </Link >
        <S.MenuBtn src="../menu.png" alt="menu" onClick={handleClick} />
      </S.TitleContainer >
      {isOpen ? <Nav /> : null}
    </>
  )
}

export default Header;