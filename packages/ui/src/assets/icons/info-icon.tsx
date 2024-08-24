import { FunctionComponent, JSX } from 'preact';

export const InfoIcon: FunctionComponent<JSX.SVGAttributes> = (props) => (
  <svg height="40" width="40" viewBox="0 0 40 40" fill="currentColor" {...props}>
    <path d="M20.042 27.458q.291 0 .479-.208.187-.208.187-.5v-7.792q0-.25-.187-.437-.188-.188-.479-.188-.292 0-.48.209-.187.208-.187.458v7.792q0 .291.208.479.209.187.459.187ZM20 16.083q.417 0 .667-.25.25-.25.25-.666 0-.417-.25-.667-.25-.25-.667-.25-.417 0-.667.25-.25.25-.25.667 0 .416.25.666.25.25.667.25Zm0 18.792q-3.125 0-5.833-1.146-2.709-1.146-4.729-3.167-2.021-2.02-3.167-4.729Q5.125 23.125 5.125 20t1.146-5.833q1.146-2.709 3.167-4.729 2.02-2.021 4.729-3.167Q16.875 5.125 20 5.125t5.833 1.146q2.709 1.146 4.729 3.167 2.021 2.02 3.167 4.729 1.146 2.708 1.146 5.833t-1.146 5.833q-1.146 2.709-3.167 4.729-2.02 2.021-4.729 3.167-2.708 1.146-5.833 1.146ZM20 20Zm0 13.542q5.583 0 9.562-3.959 3.98-3.958 3.98-9.583 0-5.583-3.98-9.562-3.979-3.98-9.562-3.98-5.625 0-9.583 3.98Q6.458 14.417 6.458 20q0 5.625 3.959 9.583 3.958 3.959 9.583 3.959Z" />
  </svg>
);
