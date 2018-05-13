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


export default class yalova extends Component {

  static navigationOptions = {
    tabBarIcon: () => (
    <Image
    source={require('./building.png')}
    style={styles.icon}
    />
    )
  };

  render() {
    return (
      <Container>
            <Header style={styles.header}>
              <Text> Yalova </Text>
                            <Text style={{margin: 3, fontSize: 18, textAlign: 'left'}}>

                              </Text>

            </Header>

        </Container>

    );
  }

}

const styles = StyleSheet.create({
  scroll:{
    flex:1,
    height:500,
  },
  button:{
    flex:1,
  },
  ozellikler:{
    paddingBottom:10,
  },
  ozelliklertext:{
    height:70,
    fontSize:20,
    color:'#fff',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    paddingBottom:25,
  },
  container: {
    height:500,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slider: {
    height:250,
    flex:1,
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
       borderBottomColor: '#ffcc00',
       borderBottomWidth:2,
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
