import React, { Component } from 'react'
import { View , FlatList, TouchableOpacity, Image, Text} from 'react-native'
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
		const navigation = this.props.navigation;
		console.log('nav', navigation)
		return(
		<FlatList 
		data={data}
		renderItem={({item, index}) => (
		<TouchableOpacity onPress={() => console.log(navigation.push('Chat'))}>	
			<View style={{padding: '5%', borderBottomColor:'#D5D5D5', borderLeftColor:'#ffffff', borderRightColor:'#ffffff', borderTopColor:'#ffffff', borderWidth: 1}}>
				<View style={{flex:1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center'}}>
					
					<View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
						<Image source={require('../../assets/dickpfp.png')} style={{height:64, width:64}}/>
					</View>

					<View style={{flex: 4, paddingLeft: '5%', alignItems: 'flex-start', justifyContent: 'center'}}>

							<Text style={{fontWeight: 'bold', fontSize: 13}}>
								{item.name}
							</Text>
							<Text style={{fontSize: 13, marginTop: '2%'}}>
								Meme
							</Text>
						
					</View>
				</View>
			</View>
		</TouchableOpacity>
		)}
		
		/>
		);
	}


}

const mapStateToProps = (state) => {
  return { rooms: state.rooms };
};

export default connect(mapStateToProps)(ChatRoomList);