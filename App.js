import React, { useEffect, useRef } from 'react'
import {
  Animated,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { enableScreens } from 'react-native-screens'
import DeatailsLoader from './AnimationScreens/DetailsLoader'
import HorizonScroll from './AnimationScreens/HorizonScroll'
import ScrollMastery from './AnimationScreens/ScrollMastery'
import MainNavigation from './AnimationScreens/shared/Navigation'

export default function App () {
  enableScreens(false)
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
    // <HorizonScroll />
    <MainNavigation></MainNavigation>
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
