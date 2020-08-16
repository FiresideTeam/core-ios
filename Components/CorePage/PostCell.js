import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import { Content, Container } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import PostCellBackground from "../../assets/svg/PostCellBackground";

function PostCell() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ margin: 9 }}
      onPress={() => navigation.navigate("Profile")}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          minWidth: 170,
          maxWidth: 223,
          minHeight: 250,
          padding: 5,
          shadowColor: "black",
          backgroundColor: "white",
          shadowRadius: 4,
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 4 },
        }}
      >
        <Image
          source={require("../../assets/dickpfp.png")}
          style={{ height: 155, width: 155 }}
          imageStyle={{ borderRadius: 10 }}
        />

        <Text style={styles.title}>EVERETT DICKINSON</Text>

        <Text style={styles.subtitle}>@edick</Text>
      </View>
    </TouchableOpacity>
  );
}

export default PostCell;

const styles = StyleSheet.create({
  title: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "black",
    fontSize: 13,
    opacity: 0.8,
  },
  subtitle: {
    color: "black",
    textAlign: "center",
    paddingTop: 2,
    textShadowColor: "black",
    fontSize: 12,
    opacity: 0.35,
  },
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
