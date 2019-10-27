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
          style={styles.container}>
          <View style={styles.menuContainer}>
          <MenuItem1 itemImage={require('./makan.png')}/>
          <MenuItem2 itemImage={require('./minum.png')}/>
          <MenuItem3 itemImage={require('./tidur.png')}/>
          <MenuItem4 itemImage={require('./cakap2.png')}/>
          <MenuItem5 itemImage={require('./tandas3.png')}/>
          <MenuItem6 itemImage={require('./play2.png')}/>
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
      width: '60%',
      height: '60%',
      opacity:0.8,

  }
  });
