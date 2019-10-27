import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Button, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class App extends React.Component {
  static navigationOptions = {
    headerMode: null
  }
    render() {
      return (
        <ImageBackground
          source={require('./Background.jpg')}
          style={styles.container} >

            <TouchableOpacity onPress={() => this.props.navigation.navigate('English')}>
                <Image source={require('./testMalay.png')} style={styles.image} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Malay')}>
                <Image source={require('./testEng.png')} style={styles.image} />
            </TouchableOpacity>

        </ImageBackground>

      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',

    },
    menuContainer:{
      height: Dimensions.get('window').height / 2 -7,
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent: 'center',
    },
    image:{
      width: '100%',
      height: Dimensions.get('window').height / 2 -7,
      justifyContent: 'center',
      alignItems: 'center',
      opacity:0.8,
    },
    touchCenter:{
      justifyContent: 'center',
      alignItems: 'center',
    }

  });
