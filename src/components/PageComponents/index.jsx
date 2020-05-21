import styled from 'styled-components';
import { devices } from '../../util/style/constants';

const SectionIntro = styled.section`
  height: 313px;
  margin: 100px 90px;
  display: flex;
  justify-content: space-between;

  @media ${devices.mobile} {
    flex-direction: column;
    margin: 60px 30px;
    height: auto;
  }
`;

const SectionTitle = styled.h3`
  font-size: 28px;
  text-transform: uppercase;
  /* font-family: Roboto; */

  @media ${devices.mobile} {
    text-align: center;
  }
`;

const SectionAboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 675px;
  justify-content: space-evenly;
`;

const SectionAboutUsImg = styled.div`
  width: 420px;

  @media ${devices.mobile} {
    width: auto;
  }
`;

const SectionAboutUsP = styled.p`
  color: #7b7b7b;

  @media ${devices.mobile} {
    text-align: justify;
  }
`;

const IndexComponents = {
  SectionAboutUsImg,
  SectionAboutUsP,
  SectionAboutUsWrapper,
  SectionIntro,
  SectionTitle,
};

export default IndexComponents;
