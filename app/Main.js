import React, { useState } from 'react'
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import uuid from 'uuid/v1'
import { primaryGradientArray } from './utils/Colors'
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'
import Subtitle from './components/Subtitle'

const headerTitle = 'To Do list'

export default function Main () {
  const [inputValue, setInputValue] = useState('')
  const [allItems, setAllItems] = useState([])

  const newInputValue = (value) => {
    setInputValue(value)
  }

  const onDoneAddItem = () => {
    if (inputValue !== '') {
      const id = uuid()
      const newItemObject = {
        id: id,
        isCompleted: false,
        text: inputValue,
        createdAt: Date.now()
      }
      setAllItems([...allItems, newItemObject])
      setInputValue('')
    }
  }

  const deleteItem = id => {
    setAllItems(
      allItems.filter(item => {
        if (item.id !== id) return true
      })
    )
  }

  const checkTodo = id => {
    setAllItems(
      allItems.map(item => {
        if (item.id === id) item.isCompleted = !item.isCompleted
        return item
      })
    )
  }

  return (
    <LinearGradient colors={primaryGradientArray} style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.centered}>
        <Header style={styles.centered} title={headerTitle} />
      </View>
      <View style={styles.inputContainer}>
        <Subtitle subtitle={"What's Next?"} />
        <Input inputValue={inputValue} onChangeText={newInputValue}
          onDoneAddItem={onDoneAddItem} />
      </View>
      <View style={styles.list}>
        <View style={styles.column}>
          <Subtitle subtitle={'Recent Notes'} />
        </View>
        <ScrollView contentContainerStyle={styles.scrollableList}>
          {Object.values(allItems)
            .reverse()
            .map(item => (
              <List
                key={item.id}
                {...item}
                deleteItem={deleteItem}
                onToggleCircle={() => checkTodo(item.id)}
              />
            ))}
        </ScrollView>
      </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centered: {
    alignItems: 'center',
    marginTop: 75
  },
  inputContainer: {
    marginTop: 40,
    paddingLeft: 15
  },
  list: {
    flex: 1,
    marginTop: 70,
    paddingLeft: 15,
    marginBottom: 10
  },
  scrollableList: {
    marginTop: 15,
    justifyContent: 'center'
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
