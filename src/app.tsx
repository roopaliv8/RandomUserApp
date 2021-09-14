import React from 'react';
import { ApplicationProvider, light, mapping } from '@core/components';
import * as customTheme from '@assets/jsons/custom_theme.json';
import MyStack from './core/components/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './redux/store';
export const App = (): JSX.Element => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <ApplicationProvider mapping={mapping} theme={{ ...light, ...customTheme }}>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </ApplicationProvider>
      </PaperProvider>
    </StoreProvider>
  );
};
