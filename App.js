import React from 'react';
import { StyleSheet,Text, View, ImageBackground, Dimensions, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Welcome from "./welcome";
import Language from "./language";
import English from './english.js';
import Malay from './malay.js';



const AppStack = StackNavigator({
  Welcome: {
    screen: Welcome,
    headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }
  },
  Language: {
    screen: Language,
    headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }
  },
  English: {
    screen: English,
    headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }
  },
  Malay: {
    screen: Malay,
    headerMode: 'none',
    header: null,
    navigationOptions: {
        header: null
    }    
  },


},{//jap
  initialRouteName: 'Welcome',
},);

export default class App extends React.Component {
  static navigationOptions = {
    headerMode: 'none'
  }
  render() {
    return (
      /*<ImageBackground
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
        </ImageBackground>*/
        <AppStack />
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
});
