import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { theme } from '@style';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
  isBotField?: boolean;
}

/* stylelint-disable value-keyword-case */
export const Container = styled.div<InputProps>`
  color: ${theme.colors.pageBackground};
  background: ${theme.colors.primary.lighter};
  border-radius: 10px;
  border: 2px solid ${theme.colors.primary.lighter};
  padding: 16px;
  width: 100%;
  display: ${props => (props.isBotField ? 'none' : 'flex')};
  align-items: center;

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: ${shade(0.3, theme.colors.primary.dark)};
      color: ${shade(0.3, theme.colors.primary.dark)};
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: ${shade(0.3, theme.colors.primary.dark)};
    `}

  textarea,
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${theme.colors.blue[100]};

    &::placeholder {
      color: ${theme.colors.pageBackground};
    }
  }
`;
