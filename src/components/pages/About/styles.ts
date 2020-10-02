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

  @media ${devices.mobile} {
    margin: 40px 8px;
  }

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

export const ValuesContainer = styled.section`
  background: ${theme.colors.primary.color};
  color: ${theme.colors.pageBackground};
  padding-bottom: 16px;

  h2 {
    font-size: 3rem;
    line-height: 4rem;
    padding: 42px 0 32px;
  }

  span {
    max-width: 960px;
    margin: 8px auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media ${devices.mobile} {
      margin: 8px;
    }
  }
`;
