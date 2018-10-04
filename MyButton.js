import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <View style={styles.buttonArea}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: "#B59619",
    backgroundColor: "transparent",
    borderRadius: 25
  },

  buttonArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#B59619",
    fontSize: 16,
    fontWeight: "bold"
  }
});
