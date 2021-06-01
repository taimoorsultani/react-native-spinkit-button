import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Animated, Text} from 'react-native';
import Spinner from 'react-native-spinkit';

import {buttonStyles} from './styles';

const SpinkitButton = props => {
  const {
    // Button Container
    width,
    height,
    borderRadius,
    buttonStyle,
    onPress,
    disabled,
    // Label and Text Container
    labelAndTextContainer,
    // Text
    label,
    labelStyle,
    // Icon
    iconComponent,
    // Spinner
    loading,
    size,
    type,
    color,
    animationDuration,
  } = props;

  const baseWidth = useRef(new Animated.Value(width)).current;

  const baseBorderRadius = useRef(new Animated.Value(borderRadius)).current;

  const baseTextOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (loading) {
      performAnimation(
        baseWidth,
        height,
        baseBorderRadius,
        height / 2,
        baseTextOpacity,
        0.1,
      );
    } else {
      performAnimation(
        baseWidth,
        width,
        baseBorderRadius,
        borderRadius,
        baseTextOpacity,
        1,
      );
    }
  }, [loading]);

  const performAnimation = (
    widthStart,
    widthEnd,
    borderRadiusStart,
    borderRadiusEnd,
    opacityStart,
    opacityEnd,
  ) => {
    Animated.timing(widthStart, {
      toValue: widthEnd,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
    Animated.timing(borderRadiusStart, {
      toValue: borderRadiusEnd,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacityStart, {
      toValue: opacityEnd,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  const renderTitle = () => {
    return (
      <Animated.View
        style={[
          {
            opacity: baseTextOpacity,
          },
          labelAndTextContainer && labelAndTextContainer,
        ]}>
        {iconComponent && iconComponent}
        {label && <Text style={labelStyle && labelStyle}>{label}</Text>}
      </Animated.View>
    );
  };

  const renderIndicator = () => {
    return <Spinner isVisible={true} color={color} size={size} type={type} />;
  };

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      activeOpacity={1}>
      <Animated.View
        style={[
          buttonStyles.animatedContainer,
          buttonStyle && buttonStyle,
          {
            width: baseWidth,
            height: height,
            borderRadius: baseBorderRadius,
          },
        ]}>
        {loading ? renderIndicator() : renderTitle()}
      </Animated.View>
    </TouchableOpacity>
  );
};

SpinkitButton.prototype = {
  // Button Container
  width: PropTypes.number,
  height: PropTypes.number,
  borderRadius: PropTypes.number,
  buttonStyle: PropTypes.style,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  // Label and Text Container
  labelAndTextContainer: PropTypes.style,
  // Text
  label: PropTypes.string,
  labelStyle: PropTypes.style,
  // Icon
  iconComponent: PropTypes.elementType,
  // Spinner
  loading: PropTypes.bool,
  size: PropTypes.number,
  type: PropTypes.oneOf([
    'CircleFlip',
    'Bounce',
    'Wave',
    'WanderingCubes',
    'Pulse',
    'ChasingDots',
    'ThreeBounce',
    'Circle',
    '9CubeGrid',
    'WordPress',
    'FadingCircle',
    'FadingCircleAlt',
    'Arc',
    'ArcAlt',
  ]),
  color: PropTypes.string,
  animationDuration: PropTypes.number,
};

SpinkitButton.defaultProps = {
  // Button Container
  width: 250,
  height: 40,
  borderRadius: 10,
  buttonStyle: {},
  onPress: () => {},
  disabled: false,
  // Label and Text Container
  labelAndTextContainer: {},
  // Text
  label: null,
  labelStyle: {},
  // Icon
  iconComponent: null,
  // Spinner
  loading: false,
  size: 10,
  type: 'CircleFlip',
  color: '#FFFFFF',
  animationDuration: 400,
};

export default SpinkitButton;
