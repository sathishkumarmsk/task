import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import AuthNavigator from './src/Navigator/AuthNavigator';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#000',
    },
  };

  return (
    <React.Fragment>
      <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
          <AuthNavigator />
        </NavigationContainer>
      </Provider>
    </React.Fragment>
  );
}

export default App;
