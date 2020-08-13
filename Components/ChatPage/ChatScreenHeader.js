import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import LeftActionIcon from "../../assets/svg/./LeftActionIcon.js"
import { useNavigation } from '@react-navigation/native';

export class ChatScreenHeader extends Component{
	

	render(){
		const { navigation } = this.props;
		return(
			<View style={{flex: 1, flexDirection: 'row'}}>
			<View style={{flex:1, justifyContent: 'center', width:100}}>
				<TouchableOpacity onPress={() => this.props.navigation.pop()}>
					<LeftActionIcon style={{marginTop: '10%', alignSelf: 'flex-start'}}/>
				</TouchableOpacity>
			</View>
				
				<View style={{flex:1, justifyContent: 'center'}}>
					<Text style={{fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: '10%'}}>Everett</Text>
				</View>

				<View style={{flex:1}}>
		
				</View>
			</View>
		);
	}
}

export default function(props) {
  const navigation = useNavigation();
  return <ChatScreenHeader {...props} navigation={navigation} />;
}