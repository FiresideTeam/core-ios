import React, { Componenet } from 'react'
import { View, Image , Text, TouchableOpacity} from 'react-native'

const dickpfp = require("../../assets/dickpfp.png")

export const ChatRoom = ({item, index, navigation}) => {
	return (
	<TouchableOpacity onPress={() => console.log(navigation)}>	
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
		)



};

	