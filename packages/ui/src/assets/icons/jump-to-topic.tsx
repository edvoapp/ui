import { FunctionComponent, JSX } from 'preact';

export const JumpToTopic: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 16V16C14.2091 16 16 14.2091 16 12V12" stroke="#1F1C20" stroke-linecap="round" />
    <path d="M8 4V4C5.79086 4 4 5.79086 4 8V8" stroke="#1F1C20" stroke-linecap="round" />
    <path
      d="M10.6464 8.64645C10.4512 8.84171 10.4512 9.15829 10.6464 9.35355C10.8417 9.54882 11.1583 9.54882 11.3536 9.35355L10.6464 8.64645ZM16.5 4C16.5 3.72386 16.2761 3.5 16 3.5H11.5C11.2239 3.5 11 3.72386 11 4C11 4.27614 11.2239 4.5 11.5 4.5H15.5V8.5C15.5 8.77614 15.7239 9 16 9C16.2761 9 16.5 8.77614 16.5 8.5V4ZM11.3536 9.35355L16.3536 4.35355L15.6464 3.64645L10.6464 8.64645L11.3536 9.35355Z"
      fill="#1F1C20"
    />
    <path
      d="M9.35355 11.3536C9.54882 11.1583 9.54882 10.8417 9.35355 10.6464C9.15829 10.4512 8.84171 10.4512 8.64645 10.6464L9.35355 11.3536ZM3.5 16C3.5 16.2761 3.72386 16.5 4 16.5H8.5C8.77614 16.5 9 16.2761 9 16C9 15.7239 8.77614 15.5 8.5 15.5H4.5V11.5C4.5 11.2239 4.27614 11 4 11C3.72386 11 3.5 11.2239 3.5 11.5V16ZM8.64645 10.6464L3.64645 15.6464L4.35355 16.3536L9.35355 11.3536L8.64645 10.6464Z"
      fill="#1F1C20"
    />
  </svg>
);
