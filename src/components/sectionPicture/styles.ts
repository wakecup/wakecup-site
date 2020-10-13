import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { devices } from '@style/constants';
import { theme } from '@style';

interface SectionProps {
  isOdd: boolean;
  expand: boolean;
}

/* stylelint-disable value-keyword-case */
/* stylelint-disable declaration-colon-newline-after */
export const SectionContent = styled.section<SectionProps>`
  position: relative;
  color: ${theme.colors.textImage};

  @media ${devices.mobile} {
    max-width: 100vw;
  }

  img {
    width: 100%;

    @media ${devices.mobile} {
      min-height: 300px;
      object-fit: cover;
    }
  }

  button,
  h4 {
    font-size: 3rem;
    min-width: 370px;

    @media ${devices.mobile} {
      font-size: 1rem;
      min-width: auto;
      display: flex;
      align-items: center;
      text-align: center;
    }
  }

  h4 {
    ${props =>
      props.isOdd
        ? css`
            margin-right: 100px;
          `
        : css`
            margin-left: 100px;
          `}

    @media ${devices.mobile} {
      margin: 0;
    }
  }

  button {
    color: inherit;
    background: inherit;
    border: 0;
    cursor: auto;
    ${props =>
      props.isOdd
        ? css`
            text-align: initial;
          `
        : css`
            text-align: end;
          `}

    @media ${devices.mobile} {
      text-align: center;
    }
  }

  svg {
    margin-left: 10px;

    @media ${devices.desktop} {
      display: none;
    }
  }

  p {
    font-size: 2rem;
    text-align: justify;
    transition: all 0.7s, opacity 0.5s;
    max-height: initial;
    ${props =>
      props.isOdd
        ? css`
            margin-left: 100px;
            padding-right: 50px;
            margin-right: 50px;
            border-right: 1px solid ${theme.colors.pageBackground};
          `
        : css`
            margin-right: 100px;
            padding-left: 50px;
            margin-left: 50px;
            border-left: 1px solid ${theme.colors.pageBackground};
          `}

    @media ${devices.mobile} {
      font-size: 0.8rem;
      border: 0;
      line-height: 1.5;
      max-height: 0;
      opacity: 0;
      margin: -60px 0;
      padding: 0 20px;
    }
  }

  .active {
    max-height: 60em;
    opacity: 1;
    margin: 0;
    padding: 10px 20px;
  }

  .infoWrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props =>
      props.isOdd
        ? transparentize(0.1, theme.colors.primary.light)
        : transparentize(0.1, theme.colors.terciary.light)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${props => (props.isOdd ? 'row-reverse' : 'row')};

    p {
      white-space: break-spaces;
    }

    @media ${devices.mobile} {
      flex-direction: column;
      justify-content: space-evenly;
    }
  }

  & + section {
    margin-top: -4px;
  }
`;
