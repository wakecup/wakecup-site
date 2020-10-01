import { useStaticQuery, graphql } from 'gatsby';
import { getCurrentLangKey } from 'ptz-i18n';
import root from 'window-or-global';

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
  const { pathname } = root.location;

  const langKey = getCurrentLangKey(langs, defaultLangKey, pathname);

  return langKey;
};

export default useCurrentLangKey;
