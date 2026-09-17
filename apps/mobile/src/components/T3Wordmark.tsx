import type { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

/**
 * The CubicOne brand mark: an orange rounded tile with a white "1", matching
 * the desktop sidebar's T3Wordmark SVG (apps/web). The mark is square, so
 * width equals height. `color` and `colorClassName` are accepted for call-site
 * compatibility; the mark keeps its brand colors.
 */
export function T3Wordmark(props: {
  readonly height: number;
  readonly color?: ColorValue;
  readonly colorClassName?: string;
}) {
  return (
    <Svg
      accessibilityLabel="CubicOne"
      height={props.height}
      width={props.height}
      viewBox="0 0 128 128"
    >
      <Path
        d="M0 28C0 12.536 12.536 0 28 0H100C115.464 0 128 12.536 128 28V100C128 115.464 115.464 128 100 128H28C12.536 128 0 115.464 0 100V28Z"
        fill="#F9601A"
      />
      <Path
        d="M50 50L77 32V96"
        stroke="#FFFFFF"
        strokeWidth={18}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}
