import styled from "styled-components";

export const FooterContainer = styled.div`
position: relative;
  height: 58px;
  background: #FFFFFF;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  >div{
    text-align: center;
  font-size: 12px;
  color: #888888;
  margin-top: 11px;
  margin-bottom: 11px;
  }
`;



function Footer() {
    return (
        <FooterContainer>
            <div>
                개인정보 처리방침 | 이용 약관<br />
                All rights reserved @ Codestates
            </div>

        </FooterContainer>
    )
}

export default Footer;