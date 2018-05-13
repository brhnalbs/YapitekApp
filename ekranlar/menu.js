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
import istanbul from "./istanbul";
import bursa from "./bursa";
import yalova from "./yalova";
import anasayfa from './anasayfa';
import { TabNavigator } from "react-navigation";
import { StackNavigator } from 'react-navigation';

var myTabs = TabNavigator({

  Anasayfa: {screen:anasayfa},
  İstanbul: {screen:istanbul},
  Bursa: {screen:bursa},
  Yalova: {screen:yalova},

},
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#525252',
    inactiveTintColor: '#525252',
    itemIconActiveColor: '#fff',
    itemIconSelectedColor: '#fff',
    showIcon: true,
    showLabel: true,
    lazyLoad: true,
    upperCaseLabel: false,
    swipeEnabled: true,
  style: {

    backgroundColor: '#f7f7f7',
    borderTopWidth: 1,
    borderTopColor: '#dedede',
    paddingTop:5,
  },
  indicatorStyle: {
            backgroundColor: '#1a74bb',
        },
}
});



export default myTabs;
