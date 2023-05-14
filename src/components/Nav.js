import { Link } from "react-router-dom";
import styled from "styled-components";

export const DropdownContainer = styled.div`
position: relative;
  width: 200px;
  height: 172px;
  left: 82.8%;
  top: -30px;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  >img{
    position: absolute;
  left: 65%;
  right: 27%;
  top: 2.33%;
  bottom: 87.21%;
  }
  >div{
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
  }
`
function Nav() {
    return (
        <nav>
            <img src="../Polygon.svg" alt="polygon" />
            <div></div>
        </nav>
    )
}
export default Nav;