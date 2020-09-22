import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { InternalLink } from '../link';

import { MobileWrapper } from './style';

interface Props {
  currentLang: 'en' | 'pt';
  languages: JSX.Element;
}

const MobileHeader = ({ currentLang, languages }: Props): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);

  const currentPath = window.location.pathname;

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
              >
                Home
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
