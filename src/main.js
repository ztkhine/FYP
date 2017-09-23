import NavigationExperimental from 'react-native-deprecated-custom-components';
//var React = require('react-native')
//var {
 //NavigationExperimental.Navigator,
  //StyleSheet
//} = React;
var React = require('react');
var {
  StyleSheet
} = require('react-native');
var Login = require('./components/login');

var ROUTES = {
  login: Login
};

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    return (
      <NavigationExperimental.Navigator
        style={ styles.container }
        initialRoute={ {name: 'login'} }
        renderScene={this.renderScene}
        configureScene={ () => { return NavigationExperimental.Navigator.SceneConfigs.FloatFromRight; } }
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});