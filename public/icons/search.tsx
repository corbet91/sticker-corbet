import { SVGProps } from "react";
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.5A8.5 8.5 0 0 1 17.118 14.642L21.555 18.337A2.284 2.284 0 1 1 18.339 21.554L14.643 17.118A8.5 8.5 0 1 1 10 1.5M10 5A5 5 0 1 0 10 15 5 5 0 0 0 10 5"
    />
  </svg>
);
export default SearchIcon;
