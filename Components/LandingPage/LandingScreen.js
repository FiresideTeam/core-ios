import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import FireSideLogo from '../../assets/svg/FireSideLogo'

export default class LandingScreen extends Component {
	

	render(){
		return(
			<View style={{flex: 1}}>
				<View style={{flex: 9, alignItems: 'center', justifyContent: 'center'}}>
					<FireSideLogo style={{width: 157, height: 48}}/>
				</View>
				<View style={{flex: 1, flexDirection: 'row'}}>

					<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 2, marginVertical: '5%', marginHorizontal: '3%'}}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate("login")}>
							<Text style={{fontWeight: 'bold'}}> LOG IN </Text>
						</TouchableOpacity>
					</View>
					<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 2, marginVertical: '5%', marginHorizontal: '3%'}}>
						<TouchableOpacity>
							<Text style={{fontWeight: 'bold'}}> REGISTER </Text>
						</TouchableOpacity>
					</View>

				</View>
			</View>
		)

	}

}