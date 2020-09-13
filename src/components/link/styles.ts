import styled from 'styled-components';
import { theme } from '@style';

export const LinkWrapper = styled.div`
  .link {
    text-decoration: none;
    padding-right: 30px;
  }

  .activeLink {
    color: ${theme.colors.primary.color};
    font-weight: bold;
  }
`;
