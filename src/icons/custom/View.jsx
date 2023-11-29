import { withSize } from "../util";

const Icon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="rgb(83, 100, 113)"
      {...props}
      aria-hidden="true"
      height="20px">
      <g>
        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
      </g>
    </svg>
  );
};

export const View = withSize(Icon);
