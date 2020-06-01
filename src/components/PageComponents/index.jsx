import styled from 'styled-components';
import { devices } from '../../util/style/constants';

// Helpers
import { appearScaling, blink, coding1, coding2, coding3, rotate } from '../../helpers/keyframes';
import { getAnimations } from '../../helpers/styled-comp';

const Section = styled.section`
  margin: 100px 90px;

  @media ${devices.mobile} {
    margin: 60px 30px;
  }
`;

const SectionIntro = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${devices.mobile} {
    flex-direction: column;
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

const SectionInfoWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const SectionInfoMirroredWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

const UiIconWrapper = styled.div`
  width: 256px;

  .gear {
    animation: ${rotate} 2.5s linear infinite;
    transform-origin: 354px 214px;
  }

  .binary {
    path {
      animation: ${blink} 3s linear infinite;
      ${getAnimations(8, 2)}
    }
  }

  .code {
    path {
      &:first-child {
        animation: ${coding1} 2s linear infinite;
      }
      &:nth-child(2) {
        animation: ${coding2} 2s linear infinite;
      }
      &:nth-child(3) {
        animation: ${coding3} 2s linear infinite;
      }
    }
  }

  @media ${devices.mobile} {
    width: auto;
  }
`;

const DigitalMktIconWrapper = styled.div`
  width: 256px;

  #fb-letter {
    stroke: #4267b2;
    fill: white;
  }

  #fb-background {
    fill: #4267b2;
  }

  #instagram-gradient {
    --color1: #ffdc80;
    --color2: #fcaf45;
    --color3: #f77737;
    --color4: #f56040;
    --color5: #fd1d1d;
    --color6: #e1306c;
    --color7: #c13584;
    --color8: #833ab4;
    --color9: #5851db;
    --colorend: #405de6;
  }

  .megafone-sound {
    fill: grey;
    stroke: transparent;
    animation: ${blink} 1.5s linear infinite;
  }

  .instagram {
    animation: ${appearScaling} 3.44s linear infinite;
    transform-origin: bottom right;
    fill: url(#instagram-gradient) #fff;
    animation-delay: 60ms;
  }

  .play {
    animation: ${appearScaling} 3.48s linear infinite;
    transform-origin: top;
    animation-delay: 20ms;
  }

  .facebook {
    animation: ${appearScaling} 3.46s linear infinite;
    transform-origin: top right;
    animation-delay: 40ms;
  }

  .file {
    animation: ${appearScaling} 3.5s linear infinite;
    transform-origin: bottom left;
  }
`;

const SocialMediaIconWrapper = styled.div`
  width: 256px;
`;

const StrategyIconWrapper = styled.div`
  width: 256px;

  .floating-data-analysis {
    path {
      animation: ${coding1} 2s linear infinite;
      ${getAnimations(2, 1.5)}
    }
  }
  .floating-data-tower {
    path {
      animation: ${coding3} 2s linear infinite;
      ${getAnimations(2, 1.5)}
    }
  }
`;

const IndexComponents = {
  DigitalMktIconWrapper,
  SectionAboutUsImg,
  SectionAboutUsP,
  SectionAboutUsWrapper,
  Section,
  SectionIntro,
  SectionInfoWrapper,
  SectionInfoMirroredWrapper,
  SectionTitle,
  SocialMediaIconWrapper,
  StrategyIconWrapper,
  UiIconWrapper,
};

export default IndexComponents;
