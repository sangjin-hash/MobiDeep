import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AreaConfigurationView from './screen/AreaConfigurationView';
import TestView from './screen/TestView';
import Header from './components/Header';
import {Provider} from 'react-redux';
import {Store} from './redux/store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AreaConfigurationView"
          screenOptions={{
            header: () => <Header></Header>,
          }}>
          <Stack.Screen
            name="AreaConfigurationView"
            component={AreaConfigurationView}
          />
          <Stack.Screen
            name="TestView"
            component={TestView}
            options={{
              header: () => null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
