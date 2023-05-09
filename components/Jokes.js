import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LikeSmall from './icons/LikeSmall';
import LikeSmallActive from './icons/LikeSmallActive';

import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  box: {
    paddingLeft: 24,
    paddingBottom: 24,
    paddingRight: 24,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
  },
  joke: {
    maxWidth: '80%',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 26,
    color: 'black',
  },
});

function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    retrieveJokes();
  }, []);

  const retrieveJokes = async () => {
    try {
      const value = await AsyncStorage.getItem('jokes');
      if (value !== null) {
        setJokes(JSON.parse(value).reverse());
      } else {
        setJokes(JSON.parse([]));
      }
      console.log(value);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = id => {
    setIsLiked(!isLiked);

    const updateLike = async () => {
      try {
        const savedJokes =
          JSON.parse(await AsyncStorage.getItem('jokes')) || [];

        let found = false;
        savedJokes.forEach(el => {
          if (el.id) {
            if (el.id == id) {
              el.isLiked = !isLiked;
              found = true;
            }
          }
        });

        if (!found) {
          savedJokes.push({
            joke: data.joke,
            isLiked: !isLiked,
            id: id,
          });
        }

        await AsyncStorage.setItem('jokes', JSON.stringify(savedJokes));
        retrieveJokes();
      } catch (error) {
        console.error(error);
      }
    };
    updateLike();
  };

  return (
    <View>
      {jokes.map((joke, index) =>
        joke.joke && joke.id ? (
          <View key={index} style={styles.box}>
            <Text style={styles.joke}>{joke.joke}</Text>
            <TouchableOpacity
              style={styles.like}
              onPress={() => handleLike(joke.id)}>
              {joke.isLiked ? <LikeSmallActive /> : <LikeSmall />}
            </TouchableOpacity>
          </View>
        ) : null,
      )}
    </View>
  );
}

export default Jokes;
