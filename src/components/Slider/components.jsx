import styled from 'styled-components';
import Img from 'gatsby-image';
import { devices } from '../../util/style/constants';

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

  @media ${devices.mobile} {
    padding-right: 8%;
    padding-left: 8%;
  }
`;

const ImageContainer = styled.div`
  @media ${devices.mobile} {
    height: 575px;
  }
`;

const StyledImage = styled(Img)`
  height: 100%;

  img {
    height: 575px !important;
  }
`;

const H1Slider = styled.h1`
  /* font-family: 'Roboto', sans-serif; */
  text-transform: uppercase;
  font-weight: 100;
  font-size: 45px;
  line-height: 60px;
  letter-spacing: 10px;
  padding-bottom: 45px;

  @media ${devices.mobile} {
    font-size: 25px;
    line-height: 30px;
  }
`;

const H2Slider = styled.h2`
  font-size: 23px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: 3px;

  @media ${devices.mobile} {
    font-size: 18px;
    line-height: 28px;
  }
`;

export { H1Slider, H2Slider, SliderWrapper, TextContainer, ImageContainer, StyledImage };
