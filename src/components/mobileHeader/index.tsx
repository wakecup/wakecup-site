import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import root from 'window-or-global';

import { InternalLink } from '../link';

// Hooks
import useCurrentLangKey from '../../hooks/currentLang';

// Assets
import { titles } from '../../util/constants/dictionary';
import { MobileWrapper } from './style';

interface Props {
  languages: JSX.Element;
}

const MobileHeader = ({ languages }: Props): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentPath, setcurrentPath] = useState('/');

  const currentLang = useCurrentLangKey();

  useEffect(() => {
    setcurrentPath(root.location.pathname);
  }, []);

  return (
    <>
      <Helmet>
        <style type="text/css">
          {`
            body {
              overflow: ${openMenu ? 'hidden' : 'auto'};
            }
          `}
        </style>
      </Helmet>
      <MobileWrapper>
        <nav className={openMenu ? 'menu menu-opened' : 'menu'}>
          <div className="burger-container">
            <button type="button" className="burger" onClick={() => setOpenMenu(state => !state)}>
              <div className="bar topBar" />
              <div className="bar btmBar" />
            </button>
          </div>
          <ul className="menu-content">
            <li className="menu-item">
              <InternalLink
                to={currentLang === 'en' ? '/' : `/${currentLang}`}
                partiallyActive={currentPath === '/pt/'}
                from="mobile-menu"
              >
                {titles[currentLang].home}
              </InternalLink>
            </li>
            <li className="menu-item">
              <InternalLink
                to={currentLang === 'en' ? '/about' : `/${currentLang}/about`}
                partiallyActive={new RegExp(/about$/).test(currentPath)}
                from="mobile-menu"
              >
                {titles[currentLang].about}
              </InternalLink>
            </li>
            <li className="menu-item">
              <InternalLink
                to={currentLang === 'en' ? '/contact' : `/${currentLang}/contact`}
                partiallyActive={new RegExp(/contact$/).test(currentPath)}
                from="mobile-menu"
              >
                {titles[currentLang].contact}
              </InternalLink>
            </li>
            <li className="menu-item">{languages}</li>
          </ul>
        </nav>
      </MobileWrapper>
    </>
  );
};

export default MobileHeader;
