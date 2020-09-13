declare module 'react-reveal/Fade';
declare module 'ptz-i18n';

declare module '*.jpg' {
  const content: React.FunctionComponent<React.ImgHTMLAttributes<ImageBitmap>>;
  export default content;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}