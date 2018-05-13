import React from  'react';
import { TabNavigator } from "react-navigation";
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';

import istanbul from "./ekranlar/istanbul";
import bursa from "./ekranlar/bursa";
import yalova from "./ekranlar/yalova";
import anasayfa from './ekranlar/anasayfa';
import menu from './ekranlar/menu';


var myTabs = TabNavigator({

  menu: {screen:menu},
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

const Tablar = DrawerNavigator({
  Anasayfa: {screen:menu},
  Hakkımızda: {screen:istanbul},
  Portföy: {screen:istanbul},
  Canlıizle: {screen:istanbul},
  SiteYönetimi: {screen:istanbul},
  İletişim: {screen:istanbul},
  Ayarlar: {screen:istanbul},
},
{
  initialRouteName: 'Anasayfa',
  drawerPosition: 'left',
  drawerWidth:240,
  drawerBackgroundColor:'#1a3c6a',
  contentOptions: {
       activeTintColor: '#fff',
       inactiveTintColor: '#fff',
       fontSize:10,
    },
},

);


export default Tablar;
