import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View
} from 'react-native';
import Content from './src/Content';


class Schwapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Content source="https://s3.eu-central-1.amazonaws.com/projectfluss/fluss.json" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

AppRegistry.registerComponent('Schwapp', () => Schwapp);
