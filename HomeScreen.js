import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from 'react-native-vector-icons';

export default function HomeScreen() {
    return (
      <View style={ styles.container }>
      <View style={ styles.iconContainer }>
          <Text style={ styles.heading }>Home</Text>
          <Text style= { styles.content }>Welcome!</Text>
         
          <Icon style={ styles.icon } name="rocket" size={80} color="#900" />
          <Ionicons name="planet-outline" size={120} color="yellow" ></Ionicons>
          </View>
          
      <View style={{marginTop: 56, marginBottom: 56}}>
    {/* Icon.Button Component */}
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={() => alert('Login with Facebook')}>
            Login with Facebook
          </Icon.Button>
          </View>
      </View>
    );
  }

const styles = StyleSheet.create( {
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#BDC6CA'
  },
  heading: {
    fontSize: 48,
    fontWeight: 'bold',
    margin: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20
  },
  content: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'lightgreen'
  },
  iconContainer: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    margin: 60,
  },
  textStyle: {
    textAlign: 'center',
    marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    margin: 10,
  }
  })
