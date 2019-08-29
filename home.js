import React from 'react';
import {ScrollView, Image, Text, View, Button} from 'react-native';

const {Navigation} = require('react-native-navigation');

let isOverlayShown = false;
let overlayId = null;

const showOverlayScreen = async () => {
  if (!isOverlayShown) {
    overlayId = await Navigation.showOverlay({
      component: {
        name: 'navigation.test.OverlayScreen',
        options: {
          overlay: {
            interceptTouchOutside: false,
          },
        },
      },
    });
    isOverlayShown = true;
  } else {
    isOverlayShown = false;

    Navigation.dismissOverlay(overlayId);
  }
};

const OverlayScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 49,
      }}>
      <View
        style={{
          height: 100,
          backgroundColor: 'green',
        }}
      />

      <View style={[{height: 100, backgroundColor: 'red'}]} />
    </View>
  );
};

const MainScreen = () => {
  return (
    <ScrollView>
      <Text style={{fontSize: 96}}>Scroll me plz</Text>
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Button title={'Show Overlay'} onPress={showOverlayScreen} />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Text style={{fontSize: 96}}>If you like</Text>
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Text style={{fontSize: 96}}>Scrolling down</Text>
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Text style={{fontSize: 96}}>What's the best</Text>
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Text style={{fontSize: 96}}>Framework around?</Text>
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Image
        source={{
          uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          width: 64,
          height: 64,
        }}
      />
      <Text style={{fontSize: 80}}>React Native</Text>
    </ScrollView>
  );
};

const registerScreens = () => {
  Navigation.registerComponent('navigation.test.MainScreen', () => MainScreen);
  Navigation.registerComponent(
    'navigation.test.OverlayScreen',
    () => OverlayScreen,
  );
};

const start = () => {
  console.log('Start app');

  registerScreens();

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'navigation.test.MainScreen',
        },
      },
    });
  });
};

module.exports = {
  start,
};
