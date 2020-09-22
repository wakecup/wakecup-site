import styled from 'styled-components';

import { theme } from '@style';
import { devices } from '@style/constants';

interface Props {
  active: boolean;
}

export const FlagLi = styled.li<Props>`
  width: 33px;
  height: 33px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: 10px;
  border: ${props => (props.active ? '3px solid' : '1px solid')};
  border-color: ${props => (props.active ? theme.colors.primary.dark : 'transparent')};

  @media ${devices.mobile} {
    border-radius: 0;
    width: auto;
    padding: 1px;
    border: ${props => (props.active ? '2px solid' : '0')};
  }

  img {
    display: inline-block;
    margin: 0 auto;
    margin-left: -18%;
    height: 100%;
    width: auto;

    @media ${devices.mobile} {
      margin-left: 0;
      margin-bottom: 6px;
    }
  }
`;
