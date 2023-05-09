import Svg, {Path} from 'react-native-svg';

function TodayActiveIcon({color}) {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4.00399 15.8415L14.771 3.41806C15.1954 2.92838 16 3.22851 16 3.87651V10.3C16 10.6866 16.3134 11 16.7 11H23.467C24.0669 11 24.3889 11.7052 23.996 12.1585L13.229 24.5819C12.8046 25.0716 12 24.7715 12 24.1235V17.7C12 17.3134 11.6866 17 11.3 17H4.53297C3.93313 17 3.61113 16.2948 4.00399 15.8415Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default TodayActiveIcon;
