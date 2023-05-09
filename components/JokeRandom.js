import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Like from '../components/icons/Like';
import LikeActive from '../components/icons/LikeActive';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 38,
    color: 'black',
    width: '90%',
  },
  textBox: {
    paddingTop: 80,
    paddingLeft: 24,
  },
});

const JOKE_API_URL = 'https://sv443.net/jokeapi/v2/joke/Any?type=single';

function JokeRandom() {
  const [joke, setJoke] = useState('');
  // const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get(JOKE_API_URL);
      const data = response.data;
      setJoke({
        joke: data.joke,
        id: data.id,
      });

      const savedJokes = JSON.parse(await AsyncStorage.getItem('jokes')) || [];
      // savedJokes.push(data.joke);

      savedJokes.push({
        id: data.id,
        joke: data.joke,
        isLiked: false,
      });
      await AsyncStorage.setItem('jokes', JSON.stringify(savedJokes));
    } catch (error) {
      console.error(error);
    }
  };

  const [isLiked, setIsLiked] = useState(false);

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
      } catch (error) {
        console.error(error);
      }
    };
    updateLike();
  };

  return (
    <View style={styles.textBox}>
      <Text style={styles.text}>{joke.joke}</Text>
      <TouchableOpacity style={styles.like} onPress={() => handleLike(joke.id)}>
        {isLiked ? <LikeActive /> : <Like />}
      </TouchableOpacity>
    </View>
  );
}

export default JokeRandom;
