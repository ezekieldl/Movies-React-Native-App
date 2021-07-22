import React from 'react';
import Home from './screens/Home';
import {View} from 'react-native';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Home />
    </View>
  );
};

export default App;
