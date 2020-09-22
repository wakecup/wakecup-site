import styled from 'styled-components';
import { theme } from '@style';

export const LinkWrapper = styled.div`
  .link {
    text-decoration: none;
    padding-right: 15px;
  }

  .activeLink {
    color: ${theme.colors.primary.color};
    font-weight: bold;
  }
`;
