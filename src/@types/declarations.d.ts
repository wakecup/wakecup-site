declare module 'react-reveal/Fade';
declare module 'ptz-i18n';

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare interface i18nProps extends Record<string, string> {
  lang: 'pt' | 'en';
}

declare type TeamProps = {
  key: string;
  name: string;
  title: string;
  quote: string;
  about: string;
  picture: string;
  linkedin?: string;
};

declare type ValueProps = {
  key: string;
  title: string;
  description: string;
};

declare interface i18nAboutProps {
  lang: 'pt' | 'en';
  team: TeamProps[];
  values: ValueProps[];
  title: string;
  ourdna: string;
  proposal: string;
  ourMission: string;
  missionText: string;
  missionText2: string;
  coreTeam: string;
}
