import React, { Component } from 'react'

import { AppRegistrory, StyleSheet, Text, View } from 'react-native'

export default class TestNative extends Component {
  render() {
    const lines = ['1line', '2line', '3line']
    const textLines = lines.map((e, i) => {
      return (
        <Text style={styles.line} key={e + i}>
          <span>{e}</span>
        </Text>
      )
    })
    return <View style={styles.container}>{textLines}</View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContaint: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5CFF'
  },
  line: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

AppRegistrory.registerComponent('TestNative', () => TestNative)
