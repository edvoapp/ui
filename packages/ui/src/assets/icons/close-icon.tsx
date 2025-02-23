import { FunctionComponent, JSX } from 'preact';

export const CloseIcon: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M15.9991 15.9991L8 8" stroke="#A89FAB" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8.00085 15.9991L16 8" stroke="#A89FAB" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);
