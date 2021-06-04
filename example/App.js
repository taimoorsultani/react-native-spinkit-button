/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import SpinkitButton from 'react-native-spinkit-button';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
  const [onlyTextLoading, setOnlyTextLoading] = useState(false);
  const [iconAndTextLoading, setIconAndTextLoading] = useState(false);
  const [onlyIconLoading, setOnlyIconLoading] = useState(false);

  const onlyTextClick = () => {
    setOnlyTextLoading(true);
    setTimeout(() => {
      setOnlyTextLoading(false);
    }, 3000);
  };

  const iconWithTextClick = () => {
    setIconAndTextLoading(true);
    setTimeout(() => {
      setIconAndTextLoading(false);
    }, 3000);
  };

  const onlyIconClick = () => {
    setOnlyIconLoading(true);
    setTimeout(() => {
      setOnlyIconLoading(false);
    }, 3000);
  };

  return (
    <View style={styles.main}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.innerContainer}>
          <Text style={styles.text}>React Native Spinkit Buttons</Text>
          <SpinkitButton
            width={270}
            height={40}
            borderRadius={11}
            onPress={onlyTextClick}
            buttonStyle={[styles.base, styles.soild]}
            label={'ONLY TEXT'}
            labelStyle={styles.textButtonStyle}
            loading={onlyTextLoading}
            size={15}
            type={'CircleFlip'}
            color={'#FFFFFF'}
            animationDuration={300}
          />
          <SpinkitButton
            width={270}
            height={40}
            borderRadius={11}
            onPress={iconWithTextClick}
            buttonStyle={[styles.base]}
            label={'TEXT with ICON'}
            labelStyle={styles.textButtonStyle}
            loading={iconAndTextLoading}
            labelAndTextContainer={styles.labelAndTextContainer}
            iconComponent={
              <Icon
                name="rocket"
                size={20}
                color="#FFFFFF"
                style={styles.icon}
              />
            }
            size={15}
            type={'Bounce'}
            color={'#FFFFFF'}
            animationDuration={300}
          />
          <SpinkitButton
            width={270}
            height={40}
            borderRadius={11}
            onPress={onlyIconClick}
            buttonStyle={[styles.base]}
            labelStyle={styles.textButtonStyle}
            loading={onlyIconLoading}
            labelAndTextContainer={styles.labelAndTextContainer}
            iconComponent={
              <Icon
                name="rocket"
                size={20}
                color="#FFFFFF"
                style={styles.icon}
              />
            }
            size={15}
            type={'Wave'}
            color={'#FFFFFF'}
            animationDuration={300}
          />
          <SpinkitButton
            width={270}
            height={40}
            borderRadius={30}
            onPress={onlyTextClick}
            buttonStyle={[styles.base, styles.soild]}
            label={'ONLY TEXT'}
            labelStyle={styles.textButtonStyle}
            loading={onlyTextLoading}
            size={15}
            type={'WanderingCubes'}
            color={'#FFFFFF'}
            animationDuration={300}
          />
          <SpinkitButton
            width={270}
            height={40}
            borderRadius={30}
            onPress={iconWithTextClick}
            buttonStyle={[styles.base]}
            label={'TEXT with ICON'}
            labelStyle={styles.textButtonStyle}
            loading={iconAndTextLoading}
            labelAndTextContainer={styles.labelAndTextContainer}
            iconComponent={
              <Icon
                name="rocket"
                size={20}
                color="#FFFFFF"
                style={styles.icon}
              />
            }
            size={15}
            type={'Pulse'}
            color={'#FFFFFF'}
            animationDuration={300}
          />
          <SpinkitButton
            width={270}
            height={40}
            borderRadius={30}
            onPress={onlyIconClick}
            buttonStyle={[styles.base]}
            labelStyle={styles.textButtonStyle}
            loading={onlyIconLoading}
            labelAndTextContainer={styles.labelAndTextContainer}
            iconComponent={
              <Icon
                name="rocket"
                size={20}
                color="#FFFFFF"
                style={styles.icon}
              />
            }
            size={15}
            type={'ChasingDots'}
            color={'#FFFFFF'}
            animationDuration={300}
          />
          <SpinkitButton
            width={270}
            height={40}
            borderRadius={0}
            onPress={onlyTextClick}
            buttonStyle={[styles.base, styles.soild]}
            label={'ONLY TEXT'}
            labelStyle={styles.textButtonStyle}
            loading={onlyTextLoading}
            size={15}
            type={'ThreeBounce'}
            color={'#FFFFFF'}
            animationDuration={300}
          />
          <SpinkitButton
            width={270}
            height={40}
            borderRadius={0}
            onPress={iconWithTextClick}
            buttonStyle={[styles.base]}
            label={'TEXT with ICON'}
            labelStyle={styles.textButtonStyle}
            loading={iconAndTextLoading}
            labelAndTextContainer={styles.labelAndTextContainer}
            iconComponent={
              <Icon
                name="rocket"
                size={20}
                color="#FFFFFF"
                style={styles.icon}
              />
            }
            size={15}
            type={'Circle'}
            color={'#FFFFFF'}
            animationDuration={300}
          />
          <SpinkitButton
            width={270}
            height={40}
            borderRadius={0}
            onPress={onlyIconClick}
            buttonStyle={[styles.base]}
            labelStyle={styles.textButtonStyle}
            loading={onlyIconLoading}
            labelAndTextContainer={styles.labelAndTextContainer}
            iconComponent={
              <Icon
                name="rocket"
                size={20}
                color="#FFFFFF"
                style={styles.icon}
              />
            }
            size={15}
            type={'9CubeGrid'}
            color={'#FFFFFF'}
            animationDuration={300}
          />
        </View>
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
  innerContainer: {
    alignItems: 'center',
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
  labelAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
});

export default App;
