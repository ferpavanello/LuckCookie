import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import MyButton from "./MyButton";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Frase do dia..." };

    this.phrases = [
      "A vida trará coisas boas se tiveres paciência.",
      "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
      "Não compense na ira o que lhe falta na razão.",
      "Defeitos e virtudes são apenas dois lados da mesma moeda.",
      "A maior de todas as torres começa no solo.",
      "Não há que ser forte. Há que ser flexível.",
      "Gente todo dia arruma os cabelos, por que não o coração?",
      "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
      "A juventude não é uma época da vida, é um estado de espírito.",
      "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
    ];

    this.crackCookie = this.crackCookie.bind(this);
  }
  crackCookie() {
    let s = this.state;
    let r = Math.floor(Math.random() * this.phrases.length);

    s.text = this.phrases[r];
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>
        <Image source={require("./images/cookie.png")} />
        <Text style={styles.text}>"{this.state.text}"</Text>
        <MyButton
          color="#B59619"
          text="Quebrar Biscoito"
          onPress={this.crackCookie}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20
  },

  text: {
    fontSize: 19,
    color: "#B59619",
    margin: 30,
    marginBottom: 150,
    fontStyle: "italic",
    textAlign: "center"
  }
});
