import { FunctionComponent, JSX } from 'preact';

export const OutlineIcon: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg height="24px" viewBox="0 0 24 24" width="24px" fill="none" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M3 15h8v-2H3v2zm0 4h8v-2H3v2zm0-8h8V9H3v2zm0-6v2h8V5H3zm10 0h8v14h-8V5z" />
  </svg>
);
