// React Components
import React, { Component } from "react";
import { Platform, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";

// Navigators
import Feed from "./Components/FeedPage/Index";
import Core from "./Components/CorePage/Main";
// Components
import TopicSingleView from "./Components/TopicSingleView";
import Profile from "./Components/Profile";
import Topic from "./Components/TopicsPage/Main";
import LoginScreen from "./Components/LoginPage/LoginScreen";
import ChatScreen from "./Components/ChatPage/ChatScreen";
import ChatRoomsScreen from "./Components/ChatRoomsPage/ChatRoomsScreen";
import LandingScreen from "./Components/LandingPage/LandingScreen";
// Redux
import { Provider } from "react-redux";
// Redux-saga
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
// Reducers
import combineReducers from "./redux/reducers/RootReducer";
// Redux-saga generators
import rootSaga from "./redux-saga/sagas/RootSaga";

// Contexts
import SessionContext from "./Contexts/SessionContext";

import { useNavigation } from "@react-navigation/native";

import { YellowBox } from "react-native";

import * as Font from "expo-font";
// Sagae-redux handling
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = (type) => store.dispatch({ type });

const bottomTabs = createBottomTabNavigator();
const topicStack = createStackNavigator();
const coreStack = createStackNavigator();

const chatStack = createStackNavigator();

const loginStack = createStackNavigator();
const mainStack = createStackNavigator();

// Navigators

function topicNavigatorStack() {
  return (
    <topicStack.Navigator headerMode={"none"}>
      <topicStack.Screen name="Topic" component={Topic} />
      <topicStack.Screen name="TopicSingleView" component={TopicSingleView} />
    </topicStack.Navigator>
  );
}

function coreNavigationStack() {
  return (
    <coreStack.Navigator headerMode={"none"} initialRouteName="Core">
      <coreStack.Screen name="Core" component={Core} />
      <coreStack.Screen name="Profile" component={Profile} />
    </coreStack.Navigator>
  );
}

function bottomTabNavigationStack() {
  return (
    <bottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "core") {
            iconName = focused ? "ios-disc" : "ios-disc";
          } else if (route.name === "feed") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "topics") {
            iconName = focused ? "ios-paper" : "ios-paper";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "black",
      }}
      initialRouteName="core"
    >
      <bottomTabs.Screen name="feed" component={Feed} />
      <bottomTabs.Screen name="core" component={coreNavigationStack} />
      <bottomTabs.Screen name="topics" component={topicNavigatorStack} />
    </bottomTabs.Navigator>
  );
}

function mainStackNavigator() {
  return (
    <mainStack.Navigator headerMode={"none"} initialRouteName="">
      <mainStack.Screen
        name="bottomTabs"
        component={bottomTabNavigationStack}
      />
      <mainStack.Screen name="ChatRooms" component={ChatRoomsScreen} />
      <mainStack.Screen name="Chat" component={ChatScreen} />
    </mainStack.Navigator>
  );
}

/*
If no login cookie is present, navigate to login page
Otherwise navigate to Main
*/
export default class App extends Component {
  constructor(props) {
    super(props);

    // React-native package refuses to update their componenets so I'm not dealing w this error
    YellowBox.ignoreWarnings([
      "componentWillMount",
      "Warning: componentWillReceiveProps has been renamed",
    ]);

    this.updateSession = () => {
      this.setState({
        isLoggedIn: true,
      });

      console.log(this.state.isLoggedIn);
    };
    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      loading: false,
      isLoggedIn: true,
      updateSession: this.updateSession,
    };
  }

  render() {
    if (!this.state.loading) {
      return (
        <Provider store={store}>
          <SessionContext.Provider value={this.state}>
            <NavigationContainer>
              {this.state.isLoggedIn ? (
                <>{mainStackNavigator()}</>
              ) : (
                <>
                  <loginStack.Navigator>
                    <loginStack.Screen
                      name="landing"
                      component={LandingScreen}
                      options={{ headerShown: false }}
                    />
                    <loginStack.Screen
                      name="login"
                      component={LoginScreen}
                      options={{ headerShown: false }}
                      setLoginState={this.updateSession}
                    />
                  </loginStack.Navigator>
                </>
              )}
            </NavigationContainer>
          </SessionContext.Provider>
        </Provider>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
