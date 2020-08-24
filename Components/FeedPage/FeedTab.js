import React, { Component } from "react";
import { Alert, StyleSheet, View, Text } from "react-native";
import { Header } from "react-native-elements";
import CardComponent from "../CardComponent";

import FeedHeader from "./FeedHeader"

class Feed extends Component {
  render() {
    return (
 <View style={{ flex: 1 }}>
        <View style={{ flex: 2, backgroundColor: "#FFFFFF" }}>
          <FeedHeader />
        </View>

        <View
          style={{
            flex: 14,
            backgroundColor: "#FFFFFF",
            borderColor: "#D5D5D5",
            borderWidth: 1.5,
          }}
        >
          <Text>
          Herro
          </Text>
        </View>
      </View>
    );
  }
}
//
export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
