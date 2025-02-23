import { FunctionComponent, JSX } from 'preact';

export const AddTag: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.5 6.69214V4C13.5 3.17157 12.8284 2.5 12 2.5H9.30786C8.64482 2.5 8.00893 2.76339 7.54009 3.23223L3.47487 7.29745C2.49856 8.27376 2.49856 9.85667 3.47487 10.833L5.16702 12.5251C6.14333 13.5014 7.72624 13.5014 8.70255 12.5251L12.7678 8.45991C13.2366 7.99107 13.5 7.35518 13.5 6.69214Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <circle cx="1.21875" cy="1.21875" r="1.21875" transform="matrix(-1 0 0 1 11.5625 4.4375)" fill="currentColor" />
  </svg>
);
