import styled from 'styled-components';

import { theme } from '@style';
import { devices } from '@style/constants';

import LogoWakeCup from '../../assets/images/logo-background.jpg';

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
  text-align: center;
  background: url(${LogoWakeCup}) 300% 10% fixed no-repeat white;

  @media ${devices.mobile} {
    background-position-x: 46%;
    background-position-y: 10%;
    background-size: cover;
  }

  strong {
    font-size: 24px;
    margin: 16px 0;
  }

  form {
    max-width: 650px;
    min-width: 250px;
    width: 50vw;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  button {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 4px;
    color: ${theme.colors.white};
    font-weight: bold;
    background: ${theme.colors.terciary.color};
    margin-top: 16px;
  }
`;
