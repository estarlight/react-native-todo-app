import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Subtitle = ({ subtitle }) => (
  <View style={styles.subContainer}>
    <Text style={styles.subText}>{subtitle.toUpperCase()}</Text>
  </View>
)
const styles = StyleSheet.create({
  subContainer: {
    marginTop: 20,
    alignItems: 'baseline'
  },
  subText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300'
  }
})
export default Subtitle
