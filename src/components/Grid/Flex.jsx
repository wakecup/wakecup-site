/* eslint-disable import/named */
import styled, { flexbox, propTypes } from '@style';
/* eslint-enable import/named */

import Box from './Box';

const Flex = styled(Box)`
  ${flexbox}
`;

Flex.displayName = `Flex`;

Flex.defaultProps = {
  display: `flex`,
};

Flex.propTypes = {
  ...propTypes.flexbox,
};

export default Flex;
