import React, {Fragment} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TodayIcon from './icons/TodayActiveIcon';
import HistoryIcon from './icons/HistoryIcon';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingTop: 12,
    borderTopColor: '#E6E6E6',
    borderTopWidth: 1,
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  box: {
    alignItems: 'center',
  },
  today: {
    color: '#C1C3C6',
  },
  activeToday: {
    color: '#9763FF',
  },
  history: {
    color: '#C1C3C6',
  },
  activeHistory: {
    color: '#9763FF',
  },
});

function Footer() {
  const navigation = useNavigation();

  const [activePage, setActivePage] = useState(0);

  const handlePress = index => {
    navigation.navigate(index == 0 ? 'Today' : 'History');
    setActivePage(index);
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handlePress(0)} style={styles.box}>
          <TodayIcon
            color={
              activePage == 0 ? styles.activeToday.color : styles.today.color
            }
          />
          <Text style={activePage == 0 ? styles.activeToday : styles.today}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress(1)} style={styles.box}>
          <HistoryIcon
            color={
              activePage == 1
                ? styles.activeHistory.color
                : styles.history.color
            }
          />
          <Text style={activePage == 1 ? styles.activeHistory : styles.history}>
            History
          </Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}

export default Footer;
