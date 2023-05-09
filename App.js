/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Today from './pages/Today';
import History from './pages/History';
import Footer from './components/Footer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Today" component={Today} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

export default App;
