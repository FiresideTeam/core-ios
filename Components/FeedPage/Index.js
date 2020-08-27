import React, { Component } from "react"
import { View, Text } from "react-native"

import FeedHeader from "./FeedHeader"

export default class Index extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 2}}>
					<FeedHeader/>
				</View>

				<View style={{flex: 14,
	            backgroundColor: "#FFFFFF",
	            borderColor: "#D5D5D5",
	            borderWidth: 1.5,}}>
        		
					<Text> Test </Text>
				</View>
			</View>


		);
	}
}