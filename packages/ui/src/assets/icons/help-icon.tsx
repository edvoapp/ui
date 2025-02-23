import { FunctionComponent, JSX } from 'preact';

export const HelpIcon: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="none" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 17V15H11V17H9ZM12.17 10.17L13.07 9.25C14.09 8.23 14.44 6.48 13.26 4.85C12.36 3.6 10.91 2.81 9.39 3.05C7.84 3.29 6.59 4.41 6.16 5.88C6 6.44 6.4 7 6.98 7H7.28C7.67 7 7.98 6.72 8.1 6.35C8.43 5.4 9.46 4.77 10.57 5.08C11.27 5.28 11.83 5.89 11.96 6.61C12.09 7.31 11.87 7.97 11.41 8.41L10.17 9.67C9.75 10.09 9.42 10.61 9.22 11.19C9.08 11.6 9 12.04 9 12.5V13H11C11 12.54 11.05 12.18 11.13 11.86C11.31 11.14 11.67 10.68 12.17 10.17Z"
      fill="currentColor"
    />
  </svg>
);
