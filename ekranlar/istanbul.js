import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Linking,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  ScrollView,
  ImageBackground,

} from 'react-native';
import { Container, Header, Content, Title, Button, Left, Right, Body, Icon } from 'native-base';


export default class istanbul extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'İstanbul',
    tabBarIcon: () => (
    <Image
    source={require('./gate.png')}
    style={styles.icon}
    />
    )
  };

  render() {
    return (
      <Container>
            <Header style={styles.header}>
              <Text> İstanbul </Text>
            </Header>

        </Container>

    );
  }

}

const styles = StyleSheet.create({

  container: {
    height:500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    width:25,
    height:25,
  },
  logo: {
    width:140,
    height:40,
  },
  header: {
    backgroundColor:'#f7f7f7',
       alignItems:'center',
       justifyContent:'center',
       borderBottomColor: '#c2c2c2',
       borderBottomWidth:1,
  },
  background:{
    height:50,
    margin:5,
    padding:5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10,10,10,0.4)',
  }
});
