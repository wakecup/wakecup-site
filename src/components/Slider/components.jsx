import styled from 'styled-components';

const SliderWrapper = styled.div`
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(to left, #8b86a377, #322e40);
  color: #e3e3e3;
  padding-right: 10%;
  padding-left: 20%;
`;

const H1Slider = styled.h1`
  /* font-family: 'Roboto', sans-serif; */
  font-weight: 100;
  font-size: 45px;
  line-height: 60px;
  letter-spacing: 10px;
  padding-bottom: 45px;
`;

const H2Slider = styled.h2`
  font-size: 23px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 3px;
`;

const SliderComponents = {
  H1Slider,
  H2Slider,
  SliderWrapper,
  TextContainer,
};

export default SliderComponents;
