import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Container, Content, Icon, Button } from "@codler/native-base";
import LoginScreen from "./LoginScreen";

/*
    Main Screen for User Profile
  */

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LoginScreen />;
  }
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
