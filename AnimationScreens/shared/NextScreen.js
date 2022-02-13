import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SharedElement } from 'react-navigation-shared-element'

const NextScreen = props => {
  const { item } = props.route.params
  return (
    <SharedElement id={`item.${item.id}.next`} style={{ flex: 1 }}>
      <View style={styles.screen}>
        <Text>NextScreen</Text>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              padding: 15
            }}
            onPress={() => props.navigation.goBack()}
          >
            <Text>GO BACK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SharedElement>
  )
}
const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NextScreen
