import * as React from 'react';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import { Ionicons } from 'react-native-vector-icons';
                                                   

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused 
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-planet' : 'ios-planet-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create( {
    container: {
      backgroundColor: 'pink',
      bottom: 40
    
    }
})  