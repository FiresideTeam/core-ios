import React, { Component } from "react";
import { View, Text } from "react-native";

import ChatRoomsScreenHeader from "./ChatRoomScreenHeader";
import ChatRoomList from "./ChatRoomList";

export default class ChatRoomsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, backgroundColor: "#FFFFFF" }}>
          <ChatRoomsScreenHeader navigation={this.props.navigation} />
        </View>

        <View
          style={{
            flex: 14,
            backgroundColor: "#FFFFFF",
            borderColor: "#D5D5D5",
            borderWidth: 0,
          }}
        >
          <ChatRoomList navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}
