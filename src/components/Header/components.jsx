import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 95px;
`;

const HeaderContainer = styled.div`
  width: 1170px;
  margin: 10px auto 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  max-width: 253.64px;
  margin-left: 30px;
  width: 100%;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: auto 0 auto auto;
`;

const HeaderComponents = {
  Header,
  HeaderContainer,
  ImageContainer,
  LinkContainer,
};

export default HeaderComponents;
