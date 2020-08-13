import React, { Component } from 'react'
import { View , FlatList} from 'react-native'
import { connect } from 'react-redux'

import { fetchChatRooms } from '../../redux/actions/ChatRoomActions'
import { ChatRoom } from './ChatRoom'

let data = [
	{name: "Everett Dickinson"},
	{name: "John Melton"},
	{name: "Michael Hla"},
	{name: "Will Allen"},
	{name: "Henry Baldwin"},
]



class ChatRoomList extends Component {


	constructor(props){
		super(props);
	}

	componentDidMount(){

	}

	render(){
		return(
		<FlatList 
		data={data}
		renderItem= { ChatRoom }
		/>
		);
	}


}

const mapStateToProps = (state) => {
  return { rooms: state.rooms };
};

export default connect(mapStateToProps)(ChatRoomList);