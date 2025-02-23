import { FunctionComponent, JSX } from 'preact';

export const BoxArchive: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg width="14" height="14" viewBox="0 0 512 512" fill="#000000" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M480 64H32v64H64 448h32V64zm0 96H448 64 32c-17.7 0-32-14.3-32-32V64C0 46.3 14.3 32 32 32H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32zM160 240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16zm288-48h32V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V192H64V416c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V192z" />
  </svg>
);
