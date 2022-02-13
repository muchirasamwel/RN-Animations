import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SharedElement } from 'react-navigation-shared-element'
const w100 = Dimensions.get('screen').width
const DetailsScreen = props => {
  const { item } = props.route.params
  const backPressHandler = () => {
    props.navigation.navigate('List', { item })
  }
  return (
    <View>
      <View style={styles.imageContainer}>
        <SharedElement id={`item.${item.id}`}>
          <Image style={styles.image} source={{ uri: item.image }} />
        </SharedElement>
      </View>
      <View style={styles.textContainer}>
        <SharedElement id={`item.${item.id}.name`}>
          <Text style={styles.name}>{item.name}</Text>
        </SharedElement>
        <SharedElement id={`item.${item.id}.team`}>
          <Text style={styles.club}>{item.team}</Text>
        </SharedElement>
      </View>
      <TouchableOpacity style={styles.button} onPress={backPressHandler}>
        <Text style={styles.buttonText}>Back To List</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: w100,
    height: '70%'
  },
  image: {
    resizeMode: 'cover',
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    padding: 10,
    textAlign: 'center'
  },
  button: {
    borderRadius: 40,
    margin: 20,
    backgroundColor: 'black'
  },
  textContainer: {
    marginVertical: 10,
    overflow: 'hidden'
  },
  name: {
    width:'100%',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  club: {
    textAlign: 'center',
    fontSize: 18
  }
})

export default DetailsScreen
