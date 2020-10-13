import React, { useState, useEffect } from 'react';
import root from 'window-or-global';

// Components
import { InternalLink } from '../link';
import { FooterWrapper } from './styles';
import { titles } from '../../util/constants/dictionary';

interface Props {
  currentLang: 'pt' | 'en';
}

const Footer: React.FC<Props> = ({ children, currentLang }) => {
  const [currentPath, setcurrentPath] = useState('/');

  useEffect(() => {
    setcurrentPath(root.location.pathname);
  }, []);

  return (
    <FooterWrapper>
      <span>
        <InternalLink
          to={currentLang === 'en' ? '/' : `/${currentLang}`}
          partiallyActive={currentPath === '/pt/'}
        >
          {titles[currentLang].home}
        </InternalLink>
        <InternalLink
          to={currentLang === 'en' ? '/about' : `/${currentLang}/about`}
          partiallyActive={new RegExp(/about/).test(currentPath)}
        >
          {titles[currentLang].about}
        </InternalLink>
      </span>
      <small>{children}</small>
    </FooterWrapper>
  );
};

export default Footer;
