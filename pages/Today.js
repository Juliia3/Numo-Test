import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import JokeRandom from '../components/JokeRandom';

const styles = StyleSheet.create({
  titleBox: {
    paddingTop: 40,
    paddingLeft: 24,
    paddingBottom: 24,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 36,
    lineHeight: 48,
    color: 'black',
  },
});

function Today() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Today</Text>
      </View>
      <ScrollView>
        <JokeRandom />
      </ScrollView>
    </View>
  );
}

export default Today;
