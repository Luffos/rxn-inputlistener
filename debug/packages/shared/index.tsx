/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useState } from 'react';
import { Text, StatusBar, View } from 'react-native';

import { KeyEvent, KeyListener } from '../../../src/index';

const App = () => {
  KeyListener.addListener('keydown', (e) => {
    console.log(e);
  });

  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#0b091f',
        padding: 5,
      }}
    >
      <StatusBar backgroundColor={'#0b091f'} barStyle="light-content" />
    </View>
  );
};

export default App;
