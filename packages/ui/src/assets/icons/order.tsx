import { FunctionComponent, JSX } from 'preact';

export const Order: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13.125 5V15" stroke="#1F1C20" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M16.25 12.0312L13.125 15.1562L10 12.0312"
      stroke="#1F1C20"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M10.75 5H3.75" stroke="#1F1C20" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.75 8.07422H3.75" stroke="#1F1C20" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.5 11.4563H3.75" stroke="#1F1C20" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7.5 14.8438H3.75" stroke="#1F1C20" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);
