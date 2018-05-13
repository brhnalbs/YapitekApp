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
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { DrawerNavigator } from 'react-navigation';

export default class anasayfa extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Anasayfa',
    tabBarIcon: ({tintColor}) => (
    <Image
    source={require('./home.png')}
    style={styles.icon}
    />

    )
  };
  constructor(props) {
  super(props)
  this.state = {
    data: [],
    showME: true
  }
}

  render() {
    return (

      <Container>

            <Header style={styles.header}>
              <View style={{flex:4, }}>
              <Image
                  source={require('./menu-2.png')}
                      style={{resizeMode:'cover', height:20, width:20,}}
                              />
              </View>

              <Text style={{ flex:12, textAlign:'center',}}> Anasayfa </Text>
              <Text style={{ flex:4, textAlign:'left',}}>  </Text>

            </Header>
          <View style={{ flex:1}}>

              <View style={{ flex:2,justifyContent: 'center', alignItems: 'center', paddingTop:60,paddingBottom:40, borderBottomWidth:0.5, marginLeft:40,marginRight:40,borderBottomColor:'#a8a8a8'}}>
              <Image style={{ height:200,resizeMode:'contain'}} source={require('./yapitek-logo.png')}/>

              </View>
              <TouchableHighlight style={{flex:1}}>
              <View style={{ paddingRight:5,flex:1, flexDirection:'row',justifyContent: 'center', alignItems: 'center', paddingTop:10,paddingBottom:10, borderBottomWidth:0.5, marginLeft:40,marginRight:40,borderBottomColor:'#a8a8a8'}}>
                  <View style={{ flex:1,  }}>
                  <Image style={{ width:25, height:25 }} source={require('./iletisim.png')}/>
                  </View>
                  <View style={{ flex:8,  marginLeft:10, }}>
                  <Text style={{ fontSize:12, fontWeight:'bold'}}> İletişim</Text>
                  <Text style={{ fontSize:12, }}> Telefon: +90 549 404 0090</Text>
                  </View>
                  <View style={{ flex:1, alignItems:'flex-end'}}>
                  <Image style={{ width:10, height:10 }} source={require('./rarrow.png')}/>
                  </View>
              </View>
              </TouchableHighlight>
              <TouchableHighlight style={{flex:1}}>
              <View style={{ paddingRight:5,flex:1, flexDirection:'row',justifyContent: 'center', alignItems: 'center', paddingTop:10,paddingBottom:10, borderBottomWidth:0.5, marginLeft:40,marginRight:40,borderBottomColor:'#a8a8a8'}}>
                  <View style={{ flex:1,  }}>
                  <Image style={{ width:25, height:25 }} source={require('./satis-temsilcisi.png')}/>
                  </View>
                  <View style={{ flex:8,  marginLeft:10, }}>
                  <Text style={{ fontSize:12, fontWeight:'bold'}}>Satış Temsilcisi</Text>
                  <Text style={{ fontSize:12, }}> Satış Temsilcisi İle Görüşün</Text>
                  </View>
                  <View style={{ flex:1, alignItems:'flex-end'}}>
                  <Image style={{ width:10, height:10 }} source={require('./rarrow.png')}/>
                  </View>
              </View>
              </TouchableHighlight>
              <TouchableHighlight style={{flex:1}}>
              <View style={{ paddingRight:5,flex:1, flexDirection:'row',justifyContent: 'center', alignItems: 'center', paddingTop:10,paddingBottom:10, borderBottomWidth:0.5, marginLeft:40,marginRight:40,borderBottomColor:'#a8a8a8'}}>
                  <View style={{ flex:1,  }}>
                  <Image style={{ width:25, height:25 }} source={require('./hakkimizda.png')}/>
                  </View>
                  <View style={{ flex:8,  marginLeft:10, }}>
                  <Text style={{ fontSize:12, fontWeight:'bold'}}> Hakkımızda</Text>
                  <Text style={{ fontSize:12, }}> Daha Fazla Bilgi </Text>
                  </View>
                  <View style={{ flex:1, alignItems:'flex-end'}}>
                  <Image style={{ width:10, height:10 }} source={require('./rarrow.png')}/>
                  </View>
              </View>
              </TouchableHighlight>

        </View>
        </Container>

    );
  }

}

const styles = StyleSheet.create({
  scroll:{
    flex:1,
    height:500,
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
       borderBottomColor: '#c2c2c2',
       borderBottomWidth:0.5,
  },
  background:{
    height:50,
    margin:5,
    padding:5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
