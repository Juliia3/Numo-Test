import Svg, {Path, Rect, G, Mask, Circle} from 'react-native-svg';

function HistoryIcon({color}) {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Mask
        id="mask0_5_438"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="28">
        <Rect width="28" height="28" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_5_438)">
        <Circle cx="14" cy="14" r="11" stroke={color} stroke-width="2" />
        <Path
          d="M14 9V14H18"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
}

export default HistoryIcon;

//WE ARE A GREAT TEAM : awwwwwww
