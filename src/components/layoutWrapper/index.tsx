import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import { useLocation } from '@reach/router';

// Hooks
import useCurrentLangKey from '../../hooks/currentLang';

// Styles
import GlobalStyles from './globalStyles';

import Header from '../header';
import Footer from '../footer';

interface GetLangItem {
  langKey: string;
  selected: boolean;
  link: string;
}

export const LayoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;

const LayoutWrapper: React.FC = ({ children }) => {
  const { site } = useStaticQuery(LayoutQuery);
  const { pathname } = useLocation();
  const { langs, defaultLangKey } = site.siteMetadata.languages;

  const langKey = useCurrentLangKey();
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, pathname)).map(
    (item: GetLangItem) => ({
      ...item,
      link: item.link.replace(`/${defaultLangKey}/`, '/'),
    })
  );

  return (
    <IntlProvider locale={langKey}>
      <GlobalStyles />
      <Header langs={langsMenu} currentLang={langKey} />
      {children}
      <Footer currentLang={langKey}>2020 Wake Cup! Digital Marketing. All rights reserved.</Footer>
    </IntlProvider>
  );
};

export default LayoutWrapper;
