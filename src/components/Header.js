import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { useState } from "react";

export const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background: #FFFFFF;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
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
  color: black;

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



function Header({ handleButtonClick }) {
  const handleClick = () => {
    handleButtonClick()
  }

  return (
    <>
      <TitleContainer>
        <Link to="/">
          <Title>
            <img src="../logo.png" alt="logo" />
            <h1>COZ Shopping</h1>
          </Title>
        </Link >

        <MenuBtn src="../menu.png" alt="menu" onClick={handleClick} />
      </TitleContainer >


    </>


  )
}

export default Header;