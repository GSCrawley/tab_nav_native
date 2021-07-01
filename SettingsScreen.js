import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 'react-native-ionicons';
import { Ionicons } from 'react-native-vector-icons';

export default function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Ionicons style={ styles.icon } name="construct-outline" size={90} color="#A7285E"></Ionicons>

        <Text style={styles.heading}>Settings</Text>
        <Text style={styles.content}> Icons! </Text>
  
        <Text style={styles.textStyle}>

        <Icon style={ styles.icon } name="camera" size={80} color="red" />
        <Ionicons style={ styles.icon } name="image-outline" size={90} color="white" ></Ionicons>
        <Ionicons style={ styles.icon } name="aperture" size={90} color="#E78421"></Ionicons>
        </Text>
      </View>
      
    );
  }

const styles = StyleSheet.create( { 
    container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#199fdb'
    },
    heading: {
      fontSize: 48,
      fontWeight: 'bold',
      margin: 20
    },
    content: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#A7285E',
      margin: 20
    },
    icon: {
      margin: 40,
      // padding: 40
    },
    textStyle: {
      textAlign: 'center',
      margin: 20,
      paddingLeft: 20,
      paddingRight: 20
  
    },
    instructions: {
      textAlign: 'center',
      margin: 10,
    }
    })  