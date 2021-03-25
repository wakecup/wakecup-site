import styled from 'styled-components';

import { theme } from '@style';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  height: 140px;
  padding-top: 25px;
  width: 80vw;
  border-top: 1px solid ${theme.colors.grey[600]};
  margin: 0 auto;
  align-items: center;

  small {
    font-size: 12px;
    padding-top: 20px;
  }

  span {
    display: inline-flex;
  }
`;
