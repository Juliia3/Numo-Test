import Svg, {Path, Rect, G, Mask} from 'react-native-svg';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  active: {
    marginLeft: 24,
    marginBottom: 24,
  },
});

function LikeSmallActive() {
  return (
    <View style={styles.active}>
      <Svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Rect width="48" height="48" rx="24" fill="#9763FF" />
        <Mask
          id="mask0_2_108"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="10"
          y="10"
          width="28"
          height="28">
          <Rect x="10" y="10" width="28" height="28" fill="#D9D9D9" />
        </Mask>
        <G mask="url(#mask0_2_108)">
          <Path
            d="M23.0671 33.6209L23.0501 33.6052L20.9809 31.7373C20.9808 31.7372 20.9808 31.7372 20.9807 31.7371C18.8825 29.8387 16.9917 27.9588 15.307 26.0974L15.3067 26.0971C13.7413 24.3692 13 22.5209 13 20.5254C13 18.9192 13.5332 17.6276 14.5931 16.5798C15.6536 15.5312 16.9655 15 18.6 15C19.515 15 20.3686 15.1907 21.1722 15.5707C21.9881 15.9573 22.6741 16.4802 23.2402 17.1417C23.4302 17.3637 23.7078 17.4915 24 17.4915C24.2922 17.4915 24.5698 17.3637 24.7598 17.1417C25.3259 16.4802 26.0119 15.9572 26.8278 15.5707C27.6314 15.1907 28.485 15 29.4 15C31.0345 15 32.3464 15.5312 33.4069 16.5798C34.4668 17.6276 35 18.9192 35 20.5254C35 22.5231 34.2621 24.3781 32.7051 26.1168C31.0336 27.9832 29.1312 29.8647 26.996 31.7607L26.996 31.7607L26.9904 31.7657L24.9504 33.6047L24.9329 33.6209C24.6542 33.8845 24.3585 34 24 34C23.6415 34 23.3458 33.8845 23.0671 33.6209Z"
            fill="white"
            stroke="white"
            stroke-width="2"
            stroke-linejoin="round"
          />
        </G>
      </Svg>
    </View>
  );
}

export default LikeSmallActive;
