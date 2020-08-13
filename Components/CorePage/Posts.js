import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	ImageBackground,
	ScrollView,
} from "react-native";
import { Content, Container } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import PostCell from "./PostCell";

export default class Posts extends Component {
	render() {

		// Need two empty flexboxes here because `YOUR CORE` 
		// needs to be aligned in
		// center to the relative flexbox
		// at a 1/3 ratio to screen width
		// and I don't know a better way to do it

		return (
		<View style={{flex: 1}}>

		   	<View style={{flex: 1, justifyContent: 'center', paddingLeft: '3.5%'}}>
					<Text style={{fontSize: 13, fontWeight: '800'}}> YOUR CORE </Text>
			</View>

		<View style={{flex: 8}}>
			<ScrollView>
				<Container style={styles.container}>
					<FlatList
						numColumns={2}
						onEndReachedThreshold={0}
						onEndReached={({ distanceFromEnd }) => {
							console.debug("on end reached ", distanceFromEnd);
						}}
						contentContainerStyle={styles.list}
						data={[
							{ key: "a" },
							{ key: "b" },
							{ key: "c" },
							{ key: "d" },
							{ key: "e" },
							{ key: "f" },
						]}
						renderItem={() => <PostCell/>}
					/>
				</Container>
			</ScrollView>
			</View>
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	list: {
		justifyContent: "center",
	},
});

/*
					ListHeaderComponent={
						<View>
							<ProfileHeader/>
							<Text style={{ padding: 10, fontWeight: "bold" }}>
								Your Core
							</Text>
						</View>
					}

					*/
