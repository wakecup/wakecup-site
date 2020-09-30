import styled from 'styled-components';

import { theme } from '@style';

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
  text-align: center;

  strong {
    font-size: 24px;
    margin: 16px 0;
  }

  form {
    max-width: 400px;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  button {
    width: 250px;
    border: 0;
    padding: 16px;
    border-radius: 4px;
    color: ${theme.colors.white};
    font-weight: bold;
    background: ${theme.colors.terciary.color};
    margin-top: 16px;
  }
`;
