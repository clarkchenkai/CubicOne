import type { SVGProps } from "react";

/** CubicOne brand mark: an orange rounded tile with a white "1". Sized by the caller via className. */
export function T3Wordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 28C0 12.536 12.536 0 28 0H100C115.464 0 128 12.536 128 28V100C128 115.464 115.464 128 100 128H28C12.536 128 0 115.464 0 100V28Z"
        fill="#F9601A"
      />
      <path
        d="M50 50L77 32V96"
        stroke="#FFFFFF"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
