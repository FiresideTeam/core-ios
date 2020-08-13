import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import { Header } from "react-native-elements";


import FiresideLogo from "../../assets/svg/./FiresideLogo"
import ChatBubbleIcon from "../../assets/svg/./ChatBubbleIcon"

export default class CoreHeader extends Component {
  render() {
    return (
    	 <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: '10%', backgroundColor: "#ffffff"}}>  

	    	<View style={{flex: 1}}>
	    
	    	</View> 

	    	<View style={{flex: 1}}>
			    <FiresideLogo style={{alignSelf: 'center'}}/>
	    	</View> 

	          <View style = {{flex: 1, justifyContent: 'center', flexDirection: 'row-reverse'}}>
	            <ChatBubbleIcon style={{alignSelf: 'center', marginLeft: '50%'}}/>
	          </View>

        </View>  
	);
  }
}




