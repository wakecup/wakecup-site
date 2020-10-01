import { useStaticQuery, graphql } from 'gatsby';
import { getCurrentLangKey } from 'ptz-i18n';
import { useLocation } from '@reach/router';

const LanguageQuery = graphql`
  query LanguageQuery {
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

const useCurrentLangKey = (): 'pt' | 'en' => {
  const { site } = useStaticQuery(LanguageQuery);
  const { defaultLangKey, langs } = site.siteMetadata.languages;
  const { pathname } = useLocation();

  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);

  return langKey;
};

export default useCurrentLangKey;
