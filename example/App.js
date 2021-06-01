/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Spinner from 'react-native-spinkit';

import SpinkitButton from 'react-native-spinkit-button';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onlyTextClick = () => {
    setIsLoading(true);
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.text}>React Native Spinkit Buttons</Text>
        <Spinner
          isVisible={false}
          color={'#FFFFFF'}
          size={20}
          type={'CircleFlip'}
        />
        <SpinkitButton
          width={270}
          height={40}
          borderRadius={11}
          onPress={onlyTextClick}
          buttonStyle={[styles.base, styles.soild]}
          label={'ONLY TEXT'}
          labelStyle={styles.textButtonStyle}
          loading={isLoading}
          size={15}
          type={'CircleFlip'}
          color={'#FFFFFF'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30,
  },
  base: {
    padding: 9,
    margin: 9,
    borderColor: 'rgba(208, 28, 98, 1)',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  soild: {
    backgroundColor: '#D01C62',
    borderColor: 'rgba(208, 28, 98, 1)',
  },
  textButtonStyle: {
    color: '#FFFFFF',
  },
});

export default App;
