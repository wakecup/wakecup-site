import styled from 'styled-components';
import { devices } from '@style/constants';
import { theme } from '@style';

export const SliderWrapper = styled.div`
  position: relative;

  .imageContainer {
    @media ${devices.mobile} {
      height: 575px;
    }
  }

  .textContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* stylelint-disable declaration-colon-newline-after */
    background: linear-gradient(
      to left,
      ${theme.colors.primary.gradient1},
      ${theme.colors.primary.gradient2}
    );
    color: #e3e3e3;
    padding-right: 10%;
    padding-left: 20%;

    @media ${devices.mobile} {
      padding-right: 8%;
      padding-left: 8%;
    }
  }

  .title {
    font-family: Roboto, sans-serif;
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
  }

  .subtitle {
    font-size: 23px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 40px;
    letter-spacing: 3px;

    @media ${devices.mobile} {
      font-size: 18px;
      line-height: 28px;
    }
  }

  .imageBack {
    height: 100%;

    img {
      height: 100%;

      @media ${devices.mobile} {
        height: 575px !important;
      }
    }
  }
`;
