# react-native-spinkit-button [![npm version](https://badge.fury.io/js/react-native-spinkit-button.svg)](https://badge.fury.io/js/react-native-spinkit-button)

`React-Native` `Button`, with collection of animated loading indicators `(react-native-spinkit)`.

# Preview

![Example of react-native-spinkit-button](https://github.com/taimoorsultani/react-native-spinkit-button/blob/main/example.gif)

## Getting Started

### Using npm

```bash
npm i react-native-spinkit react-native-spinkit-button react-native-vector-icons
```

### Using yarn

```bash
yarn add react-native-spinkit react-native-spinkit-button react-native-vector-icons
```

[react-native-spinkit](https://github.com/maxs15/react-native-spinkit)
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## Usage

### Text Only

```javascript
import React, {useState} from 'react';
import SpinkitButton from 'react-native-spinkit-button';

const App = () => {
  const [onlyTextLoading, setOnlyTextLoading] = useState(false);

  const onTextClick = () => {
    setOnlyTextLoading(true);
    setTimeout(() => {
      setOnlyTextLoading(false);
    }, 3000);
  };

  return (
    <SpinkitButton
      width={270}
      height={40}
      borderRadius={11}
      onPress={onTextClick}
      buttonStyle={styles.button}
      label={'ONLY TEXT'}
      labelStyle={styles.textButtonStyle}
      loading={onlyTextLoading}
      size={15}
      type={'CircleFlip'}
      color={'#FFFFFF'}
      animationDuration={300}
    />
  );
};
```

### Icon & Text

```javascript
import React, {useState} from 'react';
import SpinkitButton from 'react-native-spinkit-button';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
  const [iconAndTextLoading, setIconAndTextLoading] = useState(false);

  const iconWithTextClick = () => {
    setIconAndTextLoading(true);
    setTimeout(() => {
      setIconAndTextLoading(false);
    }, 3000);
  };

  return (
    <SpinkitButton
      width={270}
      height={40}
      borderRadius={11}
      onPress={iconWithTextClick}
      buttonStyle={styles.button}
      label={'TEXT with ICON'}
      labelStyle={styles.textButtonStyle}
      loading={iconAndTextLoading}
      labelAndTextContainer={styles.labelAndTextContainer}
      iconComponent={
        <Icon name="rocket" size={20} color="#FFFFFF" style={styles.icon} />
      }
      size={15}
      type={'Bounce'}
      color={'#FFFFFF'}
      animationDuration={300}
    />
  );
};
```

### Icon only

```javascript
import React, {useState} from 'react';
import SpinkitButton from 'react-native-spinkit-button';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
  const [onlyIconLoading, setOnlyIconLoading] = useState(false);

  const onIconClick = () => {
    setOnlyIconLoading(true);
    setTimeout(() => {
      setOnlyIconLoading(false);
    }, 3000);
  };

  return (
    <SpinkitButton
      width={270}
      height={40}
      borderRadius={11}
      onPress={onIconClick}
      buttonStyle={styles.button}
      labelStyle={styles.textButtonStyle}
      loading={onlyIconLoading}
      labelAndTextContainer={styles.labelAndTextContainer}
      iconComponent={
        <Icon name="rocket" size={20} color="#FFFFFF" style={styles.icon} />
      }
      size={15}
      type={'Wave'}
      color={'#FFFFFF'}
      animationDuration={300}
    />
  );
};
```

## Example

A full working example project is here [react-native-spinkit-button/example](https://github.com/taimoorsultani/react-native-spinkit-button/tree/main/example)

## Properties

| Prop                  |   Default    |     Type      | Description                                      |
| :-------------------- | :----------: | :-----------: | :----------------------------------------------- |
| width                 |    `250`     |   `number`    | width of button                                  |
| height                |     `40`     |   `number`    | height of button                                 |
| borderRadius          |     `10`     |   `number`    | border radius of button                          |
| buttonStyle           |     `{}`     |    `style`    | style of button                                  |
| onPress               |  `() => {}`  |  `function`   | the function to execute on tap                   |
| disabled              |   `false`    |    `bool`     | to disable the button                            |
| labelAndTextContainer |     `{}`     |    `style`    | label container styles                           |
| label                 |    `null`    |   `string`    | label of button                                  |
| labelStyle            |     `{}`     |    `style`    | style of label                                   |
| iconComponent         |    `null`    | `elementType` | `Icon` or `Image` component                      |
| loading               |   `false`    |    `bool`     | bool value to render spinkit indicator or button |
| size                  |     `10`     |   `number`    | size of spinkit indicator                        |
| type                  | `CircleFlip` |    `oneOf`    | type of spinkit indicator                        |
| color                 |  `#FFFFFF`   |   `string`    | color of spinkit indicator                       |
| animationDuration     |    `400`     |   `number`    | duration of animation                            |

### List of available spinkit indicator types

- CircleFlip
- Bounce
- Wave
- WanderingCubes
- Pulse
- ChasingDots
- ThreeBounce
- Circle
- 9CubeGrid
- WordPress (IOS only)
- FadingCircle
- FadingCircleAlt
- Arc (IOS only)
- ArcAlt (IOS only)

## Acknowledgment and Big Thanks to

[react-native-spinkit](https://github.com/maxs15/react-native-spinkit)
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## License

This project is licensed under the MIT License -
(c) 2021 [Muhammad Taimoor Sultani](https://github.com/taimoorsultani), [MIT license](/LICENSE).
