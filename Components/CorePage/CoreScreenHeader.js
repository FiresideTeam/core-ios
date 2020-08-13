import React, {Component} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { Header } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

import FiresideLogo from "../../assets/svg/./FiresideLogo"
import ChatBubbleIcon from "../../assets/svg/./ChatBubbleIcon"

class CoreHeader extends Component {
  render() {
    return (
    	 <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: '10%', backgroundColor: "#ffffff"}}>  

	    	<View style={{flex: 1}}>
	    
	    	</View> 

	    	<View style={{flex: 1}}>
			    <FiresideLogo style={{alignSelf: 'center'}}/>
	    	</View> 

	          <View style = {{flex: 1, justifyContent: 'center', flexDirection: 'row-reverse'}}>
	            <TouchableOpacity style={{alignSelf: 'center', marginLeft: '50%'}} onPress={() => this.props.navigation.push('ChatRooms')}>
	            	<ChatBubbleIcon/>
	          	</TouchableOpacity>
	          </View>

        </View>  
	);
  }
}

export default function(props) {
  const navigation = useNavigation();
  return <CoreHeader {...props} navigation={navigation} />;
}

