import styled from 'styled-components';

import { devices } from '@style/constants';

export const Container = styled.div`
  font-size: 2rem;
  line-height: 3rem;
  max-width: 45%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  min-height: 265px;

  @media ${devices.mobile} {
    font-size: 1.25rem;
    line-height: 2rem;
    max-width: 100%;
    min-height: 200px;
  }

  strong {
    font-size: 2.5rem;
    line-height: 3rem;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  svg {
    margin-right: 20px;
  }

  p {
    margin-bottom: 16px;
  }
`;
