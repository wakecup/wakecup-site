import React from 'react';
import PropTypes from 'prop-types';
import GoogleAnalytics from 'react-ga';
import { Link as GatsbyLink } from 'gatsby';
import { theme } from '@style';

const Link = ({ to, from, children, className }) => (
  <GatsbyLink
    to={to}
    className={className}
    onClick={() => {
      GoogleAnalytics.event({
        category: 'Link',
        action: `[clicked] ${from}`,
        label: to,
      });
    }}
    activeStyle={{ color: theme.colors.primary.color, fontWeight: 'bold' }}
    style={{ textDecoration: 'none', paddingRight: 30 }}
  >
    {children}
  </GatsbyLink>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  from: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Link.defaultProps = {
  className: ``,
  from: `unnamed link`,
};

export default Link;
