/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';

const { width } = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isConnected: true,
    };
  }

  componentDidMount() {
    NetInfo.addEventListener(state => {
      this.handleConnectivityChange(state.isConnected);
    });
  }

  componentWillUnmount() {
    NetInfo.addEventListener(state => {
      this.handleConnectivityChange(state.isConnected);
    });
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.setState({ isConnected });
    } else {
      this.setState({ isConnected });
    }
  };

  render() {
    if (!this.state.isConnected) {
      return <MiniOfflineSign />;
    }
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://ecarto.co.uk/chat/seller-support' }}
          userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"
          originWhitelist={['*']}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30,
  },
  offlineText: { color: '#fff' },
});

export default App;
