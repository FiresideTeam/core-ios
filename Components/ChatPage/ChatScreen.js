import React, { Component } from 'react'
import { View, Text } from 'react-native'

import ChatScreenHeader from './ChatScreenHeader'

import ChatScreenFooter from './ChatScreenFooter'
import MessageBoxContainer from './MessageBoxContainer'

export default class ChatScreen extends Component{
	
	

	render(){
		return(
			<View style={{flex: 1, backgroundColor: '#ffffff'}}>
				<View style={{flex: 2, borderColor: '#D5D5D5'}}>
					<ChatScreenHeader/>
				</View>

				<View style={{flex: 13}}>
					<MessageBoxContainer/>
				</View>

				<View style={{flex: 1}}>
					<ChatScreenFooter/>
				</View>

			</View>
		);
	}
}