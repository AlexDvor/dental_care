/**
 * @format
 */

import React from 'react';

import ReactTestRenderer from 'react-test-renderer';

jest.mock('@react-native-firebase/auth', () => {
  const authMock = () => ({
    onAuthStateChanged: (callback: (user: null) => void) => {
      callback(null);
      return jest.fn();
    },
    signOut: jest.fn(),
  });

  authMock.EmailAuthProvider = {
    credential: jest.fn(),
  };

  return authMock;
});

jest.mock('@react-native-firebase/app', () => ({
  __esModule: true,
  default: {
    apps: [],
    initializeApp: jest.fn(),
  },
}));

jest.mock('@react-native-firebase/firestore', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    collection: jest.fn(),
    runTransaction: jest.fn(),
  })),
}));

jest.mock('../src/navigation/RootNavigator', () => {
  const { View } = require('react-native');

  return function MockRootNavigator() {
    return <View />;
  };
});

import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
