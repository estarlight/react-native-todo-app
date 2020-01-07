import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { inputPlaceholder } from '../utils/Colors'
const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
  <TextInput
    style={styles.input}
    value={inputValue}
    onChangeText={onChangeText}
    placeholder='Type to add note...'
    placeholderTextColor={inputPlaceholder}
    multiline
    autoCapitalize='sentences'
    underlineColorAndroid='transparent'
    selectionColor={'white'}
    maxLength={30}
    returnKeyType='done'
    autoCorrect={false}
    blurOnSubmit
    onSubmitEditing={onDoneAddItem}
  />
)
const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 24,
    color: 'white',
    fontWeight: '500'
  }
})
export default Input
