import { SVGProps } from "react";
const TagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={77}
    height={77}
    viewBox="0 0 77 77"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={4.59253}
      y={3.94198}
      width={64}
      height={64}
      rx={8}
      transform="rotate(-3 4.59253 3.94198)"
      fill="#26E6FF"
    />
    <g filter="url(#filter0_dd_131_6)">
      <rect
        x={4.59253}
        y={3.94198}
        width={64}
        height={64}
        rx={8}
        transform="rotate(-3 4.59253 3.94198)"
        fill="white"
        fillOpacity={0.01}
        shapeRendering="crispEdges"
      />
    </g>
    <path
      d="M52.4995 36.8548L42.3505 48.1264C42.0666 48.4417 41.7413 48.6841 41.3747 48.8535C41.008 49.0229 40.6375 49.1174 40.263 49.1371C39.8885 49.1567 39.5101 49.1014 39.1278 48.9713C38.7454 48.8411 38.3966 48.6341 38.0813 48.3502L24.1692 35.8236C23.8801 35.5634 23.6513 35.2562 23.4825 34.902C23.3137 34.5479 23.2189 34.1711 23.1979 33.7716L22.6347 23.0239C22.5915 22.2 22.8479 21.4793 23.4038 20.8619C23.9598 20.2445 24.6497 19.9142 25.4736 19.871L36.2213 19.3077C36.6208 19.2868 37.012 19.3476 37.395 19.4903C37.778 19.6329 38.114 19.8344 38.403 20.0946L52.2777 32.6231C52.593 32.907 52.8291 33.2326 52.986 33.5999C53.143 33.9672 53.2313 34.3381 53.2509 34.7126C53.2705 35.0871 53.2212 35.4589 53.1028 35.8281C52.9845 36.1973 52.7834 36.5395 52.4995 36.8548ZM29.6894 28.6624C30.3136 28.6297 30.8327 28.3834 31.2467 27.9236C31.6607 27.4638 31.8513 26.9219 31.8186 26.2977C31.7859 25.6736 31.5396 25.1545 31.0798 24.7405C30.62 24.3265 30.0781 24.1358 29.4539 24.1685C28.8298 24.2013 28.3107 24.4475 27.8967 24.9073C27.4827 25.3671 27.2921 25.9091 27.3248 26.5332C27.3575 27.1574 27.6037 27.6764 28.0635 28.0904C28.5233 28.5044 29.0653 28.6951 29.6894 28.6624Z"
      fill="#004F59"
    />
    <defs>
      <filter
        id="filter0_dd_131_6"
        x={0}
        y={0}
        width={76.4468}
        height={76.4468}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={2}
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_131_6"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_131_6"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={1}
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_131_6"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={3} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_131_6"
          result="effect2_dropShadow_131_6"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_131_6"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default TagIcon;
