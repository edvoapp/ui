import { FunctionComponent, JSX } from 'preact';

export const StickyIcon: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg width="24" height="24" viewBox="0 0 448 512" fill="#000000" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H272V352c0-26.5 21.5-48 48-48h96V96c0-17.7-14.3-32-32-32H64zM304 434.7L402.7 336H320c-8.8 0-16 7.2-16 16v82.7zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V309.5c0 17-6.7 33.3-18.7 45.3L322.7 461.3c-12 12-28.3 18.7-45.3 18.7H64c-35.3 0-64-28.7-64-64V96z" />
  </svg>
);
