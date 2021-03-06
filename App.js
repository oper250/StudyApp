import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import JDevsMain from './src/jdevs/main';
import MooratoMain from './src/moorato/main';
import Chris from './src/chris/main';

const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator
              initialRouteName="Home"
              screenOptions={{ headerShown: false }}
          >
              <Tab.Screen
                  name="Home"
                  component={JDevsMain}
                  options={{
                      title: '정식홈',
                      tabBarIcon: ({color, size}) => (
                          <Icon name="home" color={color} size={size} />
                      ),
                  }}
              />
              <Tab.Screen
                  name="Search"
                  component={MooratoMain}
                  options={{
                      title: '동욱홈',
                      tabBarIcon: ({color, size}) => (
                          <Icon name="home" color={color} size={size} />
                      ),
                  }}
              />
              <Tab.Screen
                  name="Notification"
                  component={Chris}
                  options={{
                      title: '양재홈',
                      tabBarIcon: ({color, size}) => (
                          <Icon name="home" color={color} size={size} />
                      ),
                  }}
              />
          </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
