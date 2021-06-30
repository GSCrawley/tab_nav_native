import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from 'react-native-vector-icons' 

export default function HomeScreen() {
    return (
      <View style={ styles.container }>
      <View style={ styles.iconContainer }>
          <Text style={ styles.heading }>Home</Text>
          <Text style= { styles.content }>Welcome!</Text>
          {/* <Text>
          <Icon name="rocket" size={30} color="#900" />
          </Text> */}
    {/* Icon Component */}
          <Icon name="rocket" size={30} color="#900" />
          </View>
      <View style={{marginTop: 16, marginBottom: 16}}>
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
    backgroundColor: 'violet'
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
  }
  })
