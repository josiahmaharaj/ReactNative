import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate("Details", {
              itemId: 86,
              otherParam: "anything you want here"
            })
          }
        />
      </View>
    );
  }
}

export default HomeScreen;
