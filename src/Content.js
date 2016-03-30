import React from 'react-native'
import Swiper from 'react-native-swiper'

const {
  View,
  StyleSheet,
  Text,
} = React

export default React.createClass({
  getInitialState: function() {
    return {
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData() {
    fetch(this.props.source)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        rivers: responseData.fluss,
        loaded: true,
      })
    })
    .done();
  },

  renderLoadingView() {
    return (
      <Swiper>
        <View style={styles.slider}>
          <Text style={styles.title}>
            Loading rivers...
          </Text>
        </View>
      </Swiper>
    );
  },

  renderRiver(river, i) {
    return (
      <View style={styles.slider} key={i}>
        <Text style={styles.title}>{river.name}</Text>
        <Text style={styles.place}>{river.place}</Text>
        <Text style={styles.timestamp}>{river.timestamp}</Text>
        <Text style={styles.temperatur}>{river.temp} °C</Text>
      </View>
    );
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <Swiper showsPagination={false}>
        {this.state.rivers.map(function(river, i) {
          return this.renderRiver(river, i);
        }, this)}
      </Swiper>
    );
  },
});

const styles = StyleSheet.create({
  slider: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  place: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#fff',
    fontSize: 15,
  },
  temperatur: {
    fontSize: 30,
    paddingTop: 30,
    color: 'blue',
  },
});
