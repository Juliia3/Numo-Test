import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Jokes from '../components/Jokes';

const styles = StyleSheet.create({
  titleBox: {
    paddingTop: 40,
    paddingLeft: 24,
    paddingBottom: 24,
    marginBottom: 24,
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

function History() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>History</Text>
      </View>
      <ScrollView>
        <Jokes />
      </ScrollView>
    </View>
  );
}

export default History;
