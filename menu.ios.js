
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TabBarIOS,
  Text,
  Image,
  View
} from 'react-native';


var styles = StyleSheet.create({
  container:{
    backgroundColor: "#F5FCFF",
    flex:1,
    padding: 50,
    textAlign: 'center'
  }
});

class Info extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text> This is the Menu Page</Text>
      </View>
    );
  }
}


module.exports= Info;
