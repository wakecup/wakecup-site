import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  height: 140px;
  padding-top: 25px;
  width: 100%;
  align-items: center;
`;

const Copyright = styled.small`
  font-size: 12px;
  padding-top: 20px;
`;

const FooterComponents = {
  Copyright,
  FooterWrapper,
};

export default FooterComponents;
