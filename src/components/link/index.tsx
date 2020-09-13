import React from 'react';
import GoogleAnalytics from 'react-ga';
import { Link as GatsbyLink } from 'gatsby';
import { LinkWrapper } from './styles'; /* eslint-disable-line import/no-unresolved */

interface IntProps {
  to: string;
  from?: string;
  className?: string;
  partiallyActive?: boolean;
}

interface OutProps {
  to: string;
  from?: string;
  target?: string;
  className?: string;
}

const InternalLink: React.FC<IntProps> = ({
  to,
  from = 'unnamed link',
  children,
  className = '',
  partiallyActive,
}) => (
  <LinkWrapper>
    <GatsbyLink
      to={to}
      partiallyActive={partiallyActive}
      className={`${className} link`}
      onClick={() => {
        GoogleAnalytics.event({
          category: 'Link',
          action: `[clicked] ${from}`,
          label: to,
        });
      }}
      activeClassName="activeLink"
    >
      {children}
    </GatsbyLink>
  </LinkWrapper>
);

const OutboundLink: React.FC<OutProps> = ({
  to,
  from,
  target = '_blank',
  children,
  className = '',
}) => (
  <a
    href={to}
    target={target}
    className={className}
    rel="noopener noreferrer"
    onClick={() => {
      GoogleAnalytics.event({
        category: 'Outbound Link',
        action: `[clicked] ${from}`,
        label: to,
      });
    }}
  >
    {children}
  </a>
);

export { InternalLink, OutboundLink };
