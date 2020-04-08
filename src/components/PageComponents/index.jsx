import styled from 'styled-components';

const SectionIntro = styled.section`
  height: 313px;
  margin: 100px 90px;
  display: flex;
  justify-content: space-between;
`;

const SectionTitle = styled.h3`
  font-size: 28px;
  text-transform: uppercase;
  /* font-family: Roboto; */
`;

const SectionAboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 675px;
  justify-content: space-evenly;
`;

const SectionAboutUsImg = styled.div`
  width: 420px;
`;

const SectionAboutUsP = styled.p`
  color: #7b7b7b;
`;

const IndexComponents = {
  SectionAboutUsImg,
  SectionAboutUsP,
  SectionAboutUsWrapper,
  SectionIntro,
  SectionTitle,
};

export default IndexComponents;
