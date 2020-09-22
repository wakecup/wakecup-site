import styled from 'styled-components';
import { devices } from '@style/constants';
import { theme } from '@style';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 95px;

  @media ${devices.mobile} {
    height: 72px;
  }

  .languageWrapper {
    list-style: none;
    display: flex;
    align-items: center;

    div {
      display: flex;
      align-items: center;
    }

    a {
      text-transform: uppercase;
      padding: 0;
    }
  }

  .container {
    width: 98vw;
    margin: 10px auto 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${devices.mobile} {
      width: auto;
      margin: 5px auto 0;
    }

    a {
      transition: color 0.2s;

      &:hover {
        color: ${theme.colors.primary.lighter};
      }
    }
  }

  .imageContainer {
    max-width: 253.64px;
    margin-left: 30px;
    width: 100%;

    @media ${devices.mobile} {
      max-width: 200px;
      margin-left: 10px;
    }
  }

  .linkContainer {
    display: flex;
    flex: 1;
    justify-content: space-between;

    @media ${devices.mobile} {
      display: none;
    }
  }

  .internalLinkContainer {
    display: flex;
    justify-content: flex-end;
    margin: auto 0 auto auto;

    @media ${devices.mobile} {
      display: none;
    }
  }
`;
