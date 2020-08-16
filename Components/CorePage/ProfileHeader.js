import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  Container,
  Left,
  Right,
  Card,
  Body,
  Thumbnail,
  CardItem,
  Button,
} from "native-base";

import ClockIcon from "../../assets/svg/ClockIcon";
import GoatIcon from "../../assets/svg/GoatIcon";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

export class ProfileScreenHeader extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1.5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1.25, justifyContent: "center" }}>
            <Thumbnail
              circle
              large
              source={{ uri: "https://picsum.photos/199/300" }}
              style={{
                alignSelf: "center",
                width: 103,
                height: 100,
                borderRadius: 103 / 2,
              }}
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Text style={{ fontWeight: "400", fontSize: 18, color: "#000000" }}>
              {" "}
              Michael Hla
            </Text>

            <Text style={{ fontWeight: "400", color: "#A0A0A0", fontSize: 13 }}>
              {" "}
              @MICHAELH420{" "}
            </Text>

            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderRadius: 6,
                height: 28,
                marginTop: "10%",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 10 }}> EDIT ACCOUNT </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              flexDirection: "row-reverse",
            }}
          >
            <ClockIcon style={{ alignSelf: "center", marginLeft: "50%" }} />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ flex: 2 }}>
            <Text
              style={{ fontSize: 13, fontWeight: "800", paddingLeft: "3.5%" }}
            >
              {" "}
              YOUR AWARDS{" "}
            </Text>
          </View>

          <FlatList
            horizontal={true}
            data={[
              { key: "1" },
              { key: "2" },
              { key: "3" },
              { key: "4" },
              { key: "5" },
              { key: "6" },
              { key: "7" },
            ]}
            showsHorizontalScrollIndicator={false}
            renderItem={() => (
              <View style={{ paddingLeft: 20 }}>
                <GoatIcon style={{ width: 45, height: 44 }} />
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

// Wrap and export
export default function (props) {
  const navigation = useNavigation();
  return <ProfileScreenHeader {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

/*

<Card style={{ borderRadius: 10 }}>
        <CardItem style={{ height: 100 }}>
          <Left>
            <Thumbnail
              source={{ uri: "https://picsum.photos/199/300" }}
              style={{ height: 80, width: 80 }}
            />
            <Body>
              <Text style={{ fontWeight: "bold" }}> Michael Hla</Text>
              <Text note> @michaelh40 </Text>
            </Body>

          </Left>
          <Right>
            <ClockIcon/>
          </Right>
        </CardItem>
      </Card>
  */
