import styled from 'styled-components';

import { theme } from '@style';
import { devices } from '@style/constants';

export const AboutContainer = styled.div`
  text-align: center;
  color: ${theme.colors.primary.text};
  white-space: break-spaces;
`;

export const SectionContainer = styled.section`
  max-width: 960px;
  text-align: center;
  margin: 40px auto;

  h1 {
    text-transform: uppercase;
    margin: 32px 0;
    font-size: 7rem;

    @media ${devices.mobile} {
      font-size: 5rem;
    }
  }

  em {
    font-size: 5rem;
    line-height: 5.5rem;

    @media ${devices.mobile} {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  h2 {
    margin: 8px 0;
    font-size: 6.5rem;

    @media ${devices.mobile} {
      font-size: 4rem;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 3rem;

    @media ${devices.mobile} {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    & + p {
      margin-top: 2rem;
    }
  }

  & + section {
    margin-top: 6rem;
  }
`;

export const ValuesContainer = styled.section``;
