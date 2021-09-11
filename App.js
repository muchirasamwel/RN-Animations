import React, { useEffect, useRef } from 'react'
import {
  Animated,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import DeatailsLoader from './AnimationScreens/DetailsLoader'
import HorizonScroll from './AnimationScreens/HorizonScroll'
import ScrollMastery from './AnimationScreens/ScrollMastery'

export default function App () {
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current
  // const animeColor = useRef(new Animated.Value('red')).current
  useEffect(() => {
    // for (let i = 0; i <= 100; i++) {
    //   setTimeout(() => {
    //     translation.setValue(i)
    //   }, 25 * i)
    // }
  })
  const touchHandler = () => {
    // Animated.timing(translation.x, {
    //   toValue: 100,
    //   duration: 500,
    //   easing: Easing.bounce,
    //   useNativeDriver: true
    // })
    Animated.sequence([
      // Animated.stagger([]),
      Animated.timing(translation.x, {
        toValue: 100,
        duration: 1000,
        // easing: Easing.bounce,
        useNativeDriver: true
      }),
      Animated.timing(translation.y, {
        toValue: 100,
        duration: 500,
        easing: Easing.bounce,
        useNativeDriver: true
      })
    ]).start()
  }
  return (
    // <ScrollMastery />
    // <DeatailsLoader />
    <HorizonScroll />
    // <ScrollView>
    //   <View style={styles.container}>
    //     {/* <Animated.View
    //     onTouchEnd={touchHandler}
    //     style={{
    //       width: 100,
    //       height: 100,
    //       backgroundColor: 'red',
    //       transform: [
    //         { translateX: translation.x },
    //         { translateY: translation.y }
    //       ]
    //     }}
    //   ></Animated.View> */}
    //     <Animated.View
    //       onTouchEnd={touchHandler}
    //       style={{
    //         width: 100,
    //         height: 100,
    //         backgroundColor: 'blue',
    //         opacity: translation.x.interpolate({
    //           inputRange: [0, 50, 100],
    //           outputRange: [1, 0, 1]
    //         }),
    //         transform: [
    //           { translateX: translation.x },
    //           { translateY: translation.y }
    //         ]
    //       }}
    //     ></Animated.View>
    //   </View>
    // </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
