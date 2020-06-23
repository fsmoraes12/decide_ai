//arquivo principal do app com interface e chamadas de funcoes

import React from 'react';
import { Button, StyleSheet, View } from 'react-native'
import { randonFilmes } from './components/listas'
import { randonSeries } from './components/listas'

export default function app() {

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          onPress={randonFilmes}
          title="FILMES"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={randonSeries}
          title="SÉRIES"
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  image: {
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#6a18c6"
  },
  buttonContainer: {
    margin: 30
  }
});


