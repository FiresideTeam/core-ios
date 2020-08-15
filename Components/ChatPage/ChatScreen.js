import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import ChatScreenHeader from './ChatScreenHeader'
import Messages from './Messages'
import ChatScreenFooter from './ChatScreenFooter'

import { sendMessage } from "../../redux/actions/./MessageActions"
import { openSocket } from "../../redux/actions/./SocketActions"

class ChatScreen extends Component{
	constructor(props){
		super(props);

		this.sendMessage = this.sendMessage.bind(this);

		
	}

	componentDidMount(){

		//this.props.sendMessage;
		//this.sendMessage();
	}

	sendMessage = () => {
		console.log("Button pressed 1");
		const user = ({name: this.state.name});
		this.props.sendMessage(this.state.messageInput, user);
		console.log(this.state.messageInput);
		this.setState({messageInput: ""});
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