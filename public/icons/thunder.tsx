import { SVGProps } from "react";

const ThunderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={30}
    viewBox="0 0 24 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 30L7.5 19.5H0L13.5 0H16.5L15 12H24L9 30H6V30" fill="#004F59" />
  </svg>
);
export default ThunderIcon;
