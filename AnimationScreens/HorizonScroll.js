import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  ImageBackground
} from 'react-native'

const ListItem = ({ item, ind, scrollX }) => {
  const w100 = Dimensions.get('screen').width

  const inputRange = [
    -1,
    0,
    w100 * (ind == 0 || ind == 1 ? 0 : ind - 2),
    w100 * ind,
    w100 * (ind + 2)
  ]

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [1, 1, 0, 1, 0],
    extrapolate: 'clamp'
  })

  return (
    <Animated.View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: w100,
        height: '100%',
        transform: [{ scale }]
      }}
    >
      <View style={styles.imageContainer}>
        <Animated.Image style={[styles.image]} source={{ uri: item.image }} />
      </View>
      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          transform: [
            {
              translateX: scrollX.interpolate({
                inputRange: [
                  w100 * ind - 2,
                  w100 * ind - 1,
                  w100 * ind,
                  w100 * ind + 1,
                  w100 * ind + 2
                ],
                outputRange: [0, -10, 0, 10, 0]
                // extrapolate: 'clamp'
              })
            }
          ]
        }}
      >
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.team}>{item.team}</Text>
      </Animated.View>
    </Animated.View>
  )
}
const HorizonScroll = props => {
  let data = [
    {
      name: 'Virgil van Dijk',
      team: 'Liverpool',
      image: 'https://wallpapercave.com/wp/wp4329242.png'
    },
    {
      name: 'Erling Haaland',
      team: 'Dortmund',
      image:
        'https://w0.peakpx.com/wallpaper/241/51/HD-wallpaper-erling-haaland-borussia-borussia-dortmund-budesliga-foot-football-futbol-futebol-man-player.jpg'
    },
    {
      name: 'Neymar',
      team: 'PSG',
      image:
        'https://i.pinimg.com/564x/cc/09/7a/cc097a1a4066ac82c56a4b3ae8f2eb39.jpg'
    },
    {
      name: 'Harry Kane',
      team: 'Tottenham',
      image: 'https://cdn.wallpapersafari.com/87/77/V6Dv0P.jpg'
    },
    {
      name: 'Cristiano Ronaldo',
      team: 'Juventus',
      image:
        'https://i0.wp.com/www.itl.cat/pngfile/big/285-2855103_cristiano-ronaldo-juventus-2019.jpg'
    },
    {
      name: 'Kevin De Bruyne',
      team: 'Man City',
      image: 'https://cdn.wallpapersafari.com/44/99/RsjmNP.jpg'
    },
    {
      name: 'Robert Lewandowski',
      team: 'Bayern Munich',
      image:
        'https://img.fcbayern.com/image/upload/t_cms-9x12/f_auto/w_660,h_880,c_fill/cms/public/images/fcbayern-com/homepage/saison-18-19/profis/lewandowski/190309_lewandowski_ima.jpg'
    },
    {
      name: 'Romelu Lukaku',
      team: 'Chelsea',
      image: 'https://pbs.twimg.com/media/E8mvUWMXoAwk1lH.jpg'
    }
  ]
  const scrollX = useRef(new Animated.Value(0)).current
  // let selectedImage = useRef(0).current

  const w100 = Dimensions.get('screen').width

  const handlerScroll = e => {
    const { nativeEvent } = e
    const c_index = Math.round(nativeEvent.contentOffset.x / w100)
    selectedImage = c_index
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        alignItems: 'center'
      }}
    >
      {data.map((back, index) => {
        return (
          <View style={styles.backContainer} key={index}>
            <Animated.Image
              style={[
                styles.backgroundImg,
                {
                  opacity: scrollX.interpolate({
                    inputRange: [
                      w100 * (index - 1),
                      w100 * index,
                      w100 * (index + 1)
                    ],
                    outputRange: [0, 1, 0]
                  })
                }
              ]}
              source={{ uri: back.image }}
              blurRadius={5}
            />
          </View>
        )
      })}
      <Animated.ScrollView
        style={{ flex: 1 }}
        horizontal
        scrollEventThrottle={2}
        snapToInterval={w100}
        showsHorizontalScrollIndicator={false}
        decelerationRate='fast'
        pagingEnabled
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { x: scrollX }
              }
            }
          ],
          {
            useNativeDriver: true
            // listener: event => {
            //   handlerScroll(event)
            // }
          }
        )}
      >
        {data.map((item, inde) => (
          <ListItem item={item} scrollX={scrollX} ind={inde} />
        ))}
      </Animated.ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%'
  },
  itemContainer: {
    height: '100%',
    width: '100%'
  },
  backContainer: {
    backgroundColor: 'rgba(0,0,0,.11)',
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  backgroundImg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  imageContainer: {
    borderWidth: 10,
    borderRadius: 20,
    borderColor: 'white',
    overflow: 'hidden',
    width: '80%',
    height: '70%'
  },
  image: {
    position: 'absolute',
    width: '105%',
    height: '105%'
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  },
  team: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default HorizonScroll
