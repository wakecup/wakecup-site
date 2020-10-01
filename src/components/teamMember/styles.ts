import styled from 'styled-components';
import { theme } from '@style';
import { shade } from 'polished';

import { devices } from '@style/constants';

export const Container = styled.div`
  display: flex;
  margin: 32px 0;
  justify-content: space-evenly;
  flex-direction: row;

  @media ${devices.mobile} {
    flex-direction: column;
    align-items: center;
  }

  img {
    border-radius: 50%;
    width: 150px;
  }

  header {
    width: 250px;
    margin: 0 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong {
      font-size: 1rem;
      margin: 8px 0;
    }

    em {
      font-size: 0.9rem;
      line-height: 1.1rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    max-width: 600px;
  }

  blockquote {
    font-style: italic;

    &::after {
      content: '"';
      font-size: 1.2rem;
    }

    &::before {
      content: '"';
      font-size: 1.2rem;
    }
  }

  .about {
    font-size: 1.2rem;
    line-height: normal;
  }

  & + div {
    margin-top: 56px;
  }

  span {
    margin-top: 1rem;
  }

  a {
    color: ${theme.colors.secondary.text};
    border: 1px solid ${theme.colors.textImage};
    border-radius: 50%;
    font-size: 18px;
    padding: 6px 5px 0;
    transform: color 0.2s;

    &:hover {
      color: ${shade(0.2, theme.colors.secondary.text)};
    }
  }
`;
