/* eslint-disable import/named */
import styled, { space, color, layout, border, background, position, propTypes } from '@style';
/* eslint-enable import/named */

const Box = styled.div`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${background}
  ${position}
`;

Box.displayName = `Box`;

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.border,
  ...propTypes.background,
  ...propTypes.position,
};

export default Box;
