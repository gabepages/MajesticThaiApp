/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */


import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TabBarIOS,
  Text,
  Image,
  View
} from 'react-native';

var Info = require('./info.ios');
var Menu = require('./menu.ios');
var Cart = require('./cart.ios');

function _icon(imageUri) {
  return {
    uri: imageUri,
    isStatic: true
  };
}

class MajesticThaiApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'info',
    };
  }
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected = {this.state.selectedTab === 'info'}
          icon={require('./images/info.png')}
          onPress={() => {
            this.setState({
              selectedTab: 'info'
            });
          }}>
          <Info/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected = {this.state.selectedTab === 'menu'}
          icon={require('./images/menu.png')}
          onPress={() => {
            this.setState({
              selectedTab: 'menu'
            });
          }}>
          <Menu/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected = {this.state.selectedTab === 'cart'}
          icon={require('./images/cart.png')}
          onPress={() => {
            this.setState({
              selectedTab: 'cart'
            });
          }}>
          <Cart/>
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}



AppRegistry.registerComponent('MajesticThaiApp', () => MajesticThaiApp);
