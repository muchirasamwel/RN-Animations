import React, { useState, useRef } from 'react'
import { Text, StyleSheet, Animated } from 'react-native'

const ListItem = ({ item, index, scrollY }) => {
  const inputRange = [
    -1,
    0,
    (200 + 20 * 2) * index,
    (200 + 20 * 2) * (index + 2)
  ]

  const scale = scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0]
  })
  return (
    <Animated.View
      style={{
        backgroundColor: 'red',
        width: '100%',
        height: 200,
        marginVertical: 20,
        transform: [{ scale }]
      }}
    >
      <Text>{item}</Text>
    </Animated.View>
  )
}

const ScrollMastery = props => {
  let data = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7'
  ]
  const scrollY = useRef(new Animated.Value(0)).current

  return (
    <Animated.ScrollView
      style={styles.screen}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
    >
      {data.map((item, index) => (
        <ListItem item={item} scrollY={scrollY} index={index} key={index} />
      ))}
    </Animated.ScrollView>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20
  }
})

export default ScrollMastery
