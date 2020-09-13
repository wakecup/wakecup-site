import styled from 'styled-components';
import { devices } from '@style/constants';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 95px;

  .container {
    width: 1170px;
    margin: 10px auto 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${devices.mobile} {
      width: auto;
    }
  }

  .imageContainer {
    max-width: 253.64px;
    margin-left: 30px;
    width: 100%;
  }

  .linkContainer {
    display: flex;
    justify-content: flex-end;
    margin: auto 0 auto auto;

    @media ${devices.mobile} {
      display: none;
    }
  }
`;
