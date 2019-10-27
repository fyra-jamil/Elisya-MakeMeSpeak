import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MenuItem1 from './MenuItemOne';
import MenuItem2 from './MenuItemTwo';
import MenuItem3 from './MenuItemThree';
import MenuItem4 from './MenuItemFour';
import MenuItem5 from './MenuItemFive';
import MenuItem6 from './MenuItemSix';


export default class App extends React.Component {
  static navigationOptions = {
    headerMode: null
  }
    render() {
      return (
        <ImageBackground
          source={require('./Background.jpg')}
          style={styles.container} >
          <View style={styles.image}>
          <Image source={require('./testWelcome.png')} style={styles.image} />
        <Button onPress={() => this.props.navigation.navigate('Language')} title="Start" />
        </View>
        </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',

    },
    menuContainer:{
      height: Dimensions.get('window').height / 2 -7,
      flexDirection:'row',
      flexWrap:'wrap',
      justifyContent: 'center',
    },
    image:{
      flex: 1,
      width: '100%',
      height: Dimensions.get('window').height / 2 -7,
      opacity:0.8,
      justifyContent : 'center',

  }
  });
