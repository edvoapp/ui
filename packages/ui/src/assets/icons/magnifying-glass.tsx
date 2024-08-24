import { FunctionComponent, JSX } from 'preact';

export const MagnifyingGlassIcon: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 512 512"
    fill="#000000"
    stroke="#000000"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L507.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L343.3 366z" />
  </svg>
);
