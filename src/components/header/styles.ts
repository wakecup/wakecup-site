import styled from 'styled-components';
import { devices } from '@style/constants';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 95px;

  @media ${devices.mobile} {
    height: 72px;
  }

  .container {
    width: 1170px;
    margin: 10px auto 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${devices.mobile} {
      width: auto;
      margin: 5px auto 0;
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
    justify-content: flex-end;
    margin: auto 0 auto auto;

    @media ${devices.mobile} {
      display: none;
    }
  }
`;
