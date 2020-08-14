import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import ChatScreenHeader from './ChatScreenHeader'
import Messages from './Messages'
import ChatScreenFooter from './ChatScreenFooter'

import { sendMessage } from "../../redux/actions/./MessageActions"
import { openSocket } from "../../redux/actions/./SocketActions"

export class ChatScreen extends Component{
	constructor(props){
		super(props);

		
	}

	componentDidMount(){
	
	}

	render(){
		return(
			<View style={{flex: 1, backgroundColor: '#ffffff'}}>
				<View style={{flex: 2, borderColor: '#D5D5D5'}}>
					<ChatScreenHeader/>
				</View>

				<View style={{flex: 13}}>
					<Messages/>
				</View>

				<View style={{flex: 1}}>
					<ChatScreenFooter/>
				</View>

			</View>
		);
	}
}

export default connect(
	null,
	{ sendMessage, openSocket }
)(ChatScreen)