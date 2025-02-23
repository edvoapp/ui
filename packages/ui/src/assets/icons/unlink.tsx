import { FunctionComponent, JSX } from 'preact';

export const Unlink: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7 13L9 11" stroke="#1F1C20" stroke-linecap="round" />
    <path d="M11 9L13 7" stroke="#1F1C20" stroke-linecap="round" />
    <path d="M15 15L5 5" stroke="#1F1C20" stroke-linecap="round" />
    <path
      d="M6.14739 9.85238L4.05899 11.9407C2.92185 13.0778 2.92186 14.9214 4.059 16.0584V16.0584C5.19615 17.1955 7.03985 17.1955 8.17699 16.0584L10.2654 13.9701"
      stroke="#1F1C20"
      stroke-linecap="round"
    />
    <path
      d="M13.8526 10.1467L15.941 8.05839C17.0781 6.9213 17.0781 5.07773 15.941 3.94065V3.94065C14.8038 2.80356 12.9602 2.80357 11.823 3.94067L9.73464 6.02895"
      stroke="#1F1C20"
      stroke-linecap="round"
    />
  </svg>
);
