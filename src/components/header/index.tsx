import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import root from 'window-or-global';

import { InternalLink } from '../link';
import MobileHeader from '../mobileHeader';
import Flag from '../flag';

// Assets
import { HeaderContainer } from './styles';
import { titles } from '../../util/constants/dictionary';

type GetLangItem = {
  langKey: 'en' | 'pt';
  selected: boolean;
  link: string;
};

interface Props {
  langs: Array<GetLangItem>;
  currentLang: 'en' | 'pt';
}

const Header = ({ langs, currentLang }: Props): JSX.Element => {
  const [currentPath, setcurrentPath] = useState('/');

  const selectLanguage = () => {
    const links = langs.map(lang => (
      <InternalLink
        key={lang.langKey}
        partiallyActive={lang.selected}
        to={lang.link}
        className="language"
        from="header"
      >
        <Flag type={lang.langKey} active={lang.selected} />
      </InternalLink>
    ));

    return <ul className="languageWrapper">{links}</ul>;
  };

  useEffect(() => {
    setcurrentPath(root.location.pathname);
  }, []);

  return (
    <HeaderContainer>
      <div className="container">
        <div className="imageContainer">
          <StaticImage src="../../assets/images/logo.png" alt="Wakecup Digital Marketing Logo" />
        </div>
        <div className="linkContainer">
          <div className="internalLinkContainer">
            <InternalLink
              to={currentLang === 'en' ? '/' : `/${currentLang}`}
              partiallyActive={currentPath === '/pt/'}
              from="header"
            >
              {titles[currentLang].home}
            </InternalLink>
            <InternalLink
              to={currentLang === 'en' ? '/about' : `/${currentLang}/about`}
              partiallyActive={new RegExp(/about/).test(currentPath)}
              from="header"
            >
              {titles[currentLang].about}
            </InternalLink>
            <InternalLink
              to={currentLang === 'en' ? '/contact' : `/${currentLang}/contact`}
              partiallyActive={new RegExp(/contact/).test(currentPath)}
              from="header"
            >
              {titles[currentLang].contact}
            </InternalLink>
          </div>
          {selectLanguage()}
        </div>
        <MobileHeader languages={selectLanguage()} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
