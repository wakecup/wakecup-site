import styled from 'styled-components';
import { devices } from '@style/constants';
import { theme } from '@style';

// Helpers
import {
  appearScaling,
  blink,
  coding1,
  coding2,
  coding3,
  rotate,
} from '../../../helpers/keyframes';
import { getAnimations } from '../../../helpers/styled-comp';

export const HomeWrapper = styled.div`
  .section {
    margin: 100px 90px;

    @media ${devices.mobile} {
      margin: 60px 30px;
    }

    div {
      white-space: pre-wrap;
    }

    h3 {
      font-size: 2rem;
      color: ${theme.colors.primary.color};
    }

    h4 {
      font-size: 1.8rem;
      color: ${theme.colors.primary.color};
      margin: 0.5rem 0;
    }

    p {
      font-size: 1.15rem;
      color: ${theme.colors.primary.text};
      text-align: justify;
      line-height: 1.5rem;
    }
  }

  .sectionIntro {
    display: flex;
    justify-content: space-between;

    @media ${devices.mobile} {
      flex-direction: column;
    }
  }

  .sectionTitle {
    font-size: 28px;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;

    @media ${devices.mobile} {
      text-align: center;
    }
  }

  .aboutUsWrapper {
    display: flex;
    flex-direction: column;
    max-width: 675px;
    justify-content: space-evenly;
  }

  .imgAboutUs {
    width: 420px;

    @media ${devices.mobile} {
      width: auto;
    }
  }

  .paragraph {
    margin: 15px 0 25px;

    @media ${devices.mobile} {
      text-align: justify;
    }
  }

  .infoWrapper {
    display: flex;
    margin-bottom: 50px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    @media ${devices.mobile} {
      flex-direction: column;
    }

    p {
      margin-left: 30px;

      @media ${devices.mobile} {
        margin-left: 0;
      }
    }
  }

  .infoMirroredWrapper {
    display: flex;
    margin-bottom: 50px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;

    @media ${devices.mobile} {
      flex-direction: column;
    }

    p {
      margin-right: 30px;

      @media ${devices.mobile} {
        margin-right: 0;
      }
    }
  }

  .strategyIcon {
    width: 256px;

    .floating-data-analysis {
      path {
        animation: ${coding1} 2s linear infinite;
        ${getAnimations(2, 1.5)}/* stylelint-disable-line value-keyword-case */
      }
    }

    .floating-data-tower {
      path {
        animation: ${coding3} 2s linear infinite;
        ${getAnimations(2, 1.5)}/* stylelint-disable-line value-keyword-case */
      }
    }
  }

  .uiIcon {
    width: 256px;

    .gear {
      animation: ${rotate} 2.5s linear infinite;
      transform-origin: 354px 214px;
    }

    .binary {
      path {
        animation: ${blink} 3s linear infinite;
        ${getAnimations(8, 2)}/* stylelint-disable-line value-keyword-case */
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
  }

  .digitalMktIcon {
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
  }

  .socialMediaIcon {
    width: 256px;
  }
`;
