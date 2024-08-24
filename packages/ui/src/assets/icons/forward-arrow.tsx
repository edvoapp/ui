import { FunctionComponent, JSX } from 'preact';

export const ForwardArrow: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg height="11px" viewBox="0 0 7 11" width="7px" fill="currentColor" {...props}>
    <path
      d="M1.25 11C1.00391 11 0.785156 10.918 0.621094 10.7539C0.265625 10.4258 0.265625 9.85156 0.621094 9.52344L4.36719 5.75L0.621094 2.00391C0.265625 1.67578 0.265625 1.10156 0.621094 0.773438C0.949219 0.417969 1.52344 0.417969 1.85156 0.773438L6.22656 5.14844C6.58203 5.47656 6.58203 6.05078 6.22656 6.37891L1.85156 10.7539C1.6875 10.918 1.46875 11 1.25 11Z"
      fill="#18181B"
    />
  </svg>
);
