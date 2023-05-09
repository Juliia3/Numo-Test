import Svg, {Path, Rect, G, Mask} from 'react-native-svg';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  fav: {
    marginTop: 16,
    paddingLeft: 24,
    marginBottom: 24,
  },
});

function Like() {
  return (
    <View>
      <Svg
        style={styles.fav}
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Rect opacity="0.2" width="64" height="64" rx="32" fill="#9763FF" />
        <Mask
          id="mask0_5_422"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="18"
          y="18"
          width="28"
          height="28">
          <Rect x="18" y="18" width="28" height="28" fill="#D9D9D9" />
        </Mask>
        <G mask="url(#mask0_5_422)">
          <Path
            d="M31.0671 41.6209L31.0501 41.6052L28.9809 39.7373C28.9808 39.7372 28.9808 39.7372 28.9807 39.7371C26.8825 37.8387 24.9917 35.9588 23.307 34.0974L23.3067 34.0971C21.7413 32.3692 21 30.5209 21 28.5254C21 26.9192 21.5332 25.6276 22.5931 24.5798C23.6536 23.5312 24.9655 23 26.6 23C27.515 23 28.3686 23.1907 29.1722 23.5707C29.9881 23.9573 30.6741 24.4802 31.2402 25.1417C31.4302 25.3637 31.7078 25.4915 32 25.4915C32.2922 25.4915 32.5698 25.3637 32.7598 25.1417C33.3259 24.4802 34.0119 23.9572 34.8278 23.5707C35.6314 23.1907 36.485 23 37.4 23C39.0345 23 40.3464 23.5312 41.4069 24.5798C42.4668 25.6276 43 26.9192 43 28.5254C43 30.5231 42.2621 32.3781 40.7051 34.1168C39.0336 35.9832 37.1312 37.8647 34.996 39.7607L34.996 39.7607L34.9904 39.7657L32.9504 41.6047L32.9329 41.6209C32.6542 41.8845 32.3585 42 32 42C31.6415 42 31.3458 41.8845 31.0671 41.6209Z"
            stroke="#9763FF"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </G>
      </Svg>
    </View>
  );
}

export default Like;
