import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';

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

  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);
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
      <Footer>2020 Wake Cup! Digital Marketing. All rights reserved.</Footer>
    </IntlProvider>
  );
};

export default LayoutWrapper;
