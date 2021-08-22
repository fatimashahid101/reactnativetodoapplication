import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import TodoList from '../screens/TodoList'
import AboutScreen from '../screens/AboutScreen'

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();






const AppStack = () => {
 return (
    <Tab.Navigator
    screenOptions={{
        activeTintColor: '#2e64e5',
      }}>
          {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          tabBarLabel: 'Home',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        })}
      /> */}
      {/* <Tab.Screen
        name="TodoList"
        component={TodoList}
        options={() => ({
          tabBarVisible: getTabBarVisibility(),
          // Or Hide tabbar when push!
          // https://github.com/react-navigation/react-navigation/issues/7677
          // tabBarVisible: route.state && route.state.index === 0,
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        })}
      /> */}
       <Tab.Screen
        name="Todo Application"
        component={TodoList}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbox-ellipses-outline" 
            color={color} 
            size={size} />
          ),
        }}
        
      />
      {/* <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default AppStack;