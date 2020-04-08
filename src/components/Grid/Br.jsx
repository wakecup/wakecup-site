/* eslint-disable import/named */
import styled, { display, propTypes } from '@style';
/* eslint-enable import/named */

const Br = styled.br`
  ${display}
`;

Br.displayName = `Br`;

Br.defaultProps = {
  display: `block`,
};

Br.propTypes = {
  ...propTypes.display,
};

export default Br;
