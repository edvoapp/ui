import { FunctionComponent, JSX } from 'preact';

export const CopyLink: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    {...props}
  >
    <path d="M19.5 17C19.5 17.8284 18.8284 18.5 18 18.5H7C6.17157 18.5 5.5 17.8284 5.5 17V4C5.5 3.17157 6.17157 2.5 7 2.5H12.5H18C18.8284 2.5 19.5 3.17157 19.5 4V17Z" />
    <path
      d="M10.0502 9.44976L8.28242 11.2175C7.3061 12.1938 7.3061 13.7767 8.28242 14.7531V14.7531C9.25873 15.7294 10.8416 15.7294 11.8179 14.7531L13.5857 12.9853"
      stroke-linecap="round"
    />
    <path
      d="M11.4645 8.03553L13.2322 6.26777C14.2085 5.29146 15.7915 5.29146 16.7678 6.26777V6.26777C17.7441 7.24408 17.7441 8.82699 16.7678 9.8033L15 11.5711"
      stroke-linecap="round"
    />
    <path d="M10.4033 12.6318L14.646 8.38919" stroke-linecap="round" />
    <path d="M4 6V18C4 19.1046 4.89543 20 6 20H16" stroke-linecap="round" />
  </svg>
);
