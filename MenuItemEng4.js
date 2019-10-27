import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, Alert, TouchableHighlight } from 'react-native';
import Expo from 'expo';
const soundObject = new Expo.Audio.Sound();
export default class MenuItemFour extends React.Component {
  componentWillMount(){
    soundObject.loadAsync(require('./talk.mp3'));
  }
  playSound = () =>{

    try {
      soundObject.replayAsync();
    } catch (error) {

    }

  }
  render() {
    return (
      <View style={styles.menuItem}>
        <TouchableHighlight onPress={this.playSound}>
        <Image
          source={this.props.itemImage}
          style={styles.image}/>
        </TouchableHighlight>
        </View>

      );
    }
  }

  const styles= StyleSheet.create({
    menuItem:{
        width:'33.333333%',
        justifyContent: 'center',
        //apply dimensions to make sure its suitable
        height: Dimensions.get('window').height / 2 -7,
        padding : 20,
        backgroundColor:'beige',
        borderColor: '#000',
        opacity:0.7,
        borderWidth: 2,
    },
    image:{
        width: '100%',
        height: '100%',
        opacity:0.8,

    }
  });
