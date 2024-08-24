import { FunctionComponent, JSX } from 'preact';

export const BrowsersIcon: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 576 512"
    fill="#000000"
    stroke="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M512 32c17.7 0 32 14.3 32 32V96H256V32H512zM160 32h64V96H128V64c0-17.7 14.3-32 32-32zM128 352V128H240 544V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32zM160 0C124.7 0 96 28.7 96 64V352c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H160zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16V384c0 70.7 57.3 128 128 128H464c8.8 0 16-7.2 16-16s-7.2-16-16-16H128c-53 0-96-43-96-96V112z" />
  </svg>
);
