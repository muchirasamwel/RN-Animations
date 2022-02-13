import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SharedElement } from 'react-navigation-shared-element'

const w100 = Dimensions.get('screen').width

const ListScreen = props => {
  const { navigation } = props
  let data = [
    {
      id: '1',
      name: 'Virgil van Dijk',
      team: 'Liverpool',
      image: 'https://wallpapercave.com/wp/wp4329242.png'
    },
    {
      id: '2',

      name: 'Erling Haaland',
      team: 'Dortmund',
      image:
        'https://w0.peakpx.com/wallpaper/241/51/HD-wallpaper-erling-haaland-borussia-borussia-dortmund-budesliga-foot-football-futbol-futebol-man-player.jpg'
    },
    {
      id: '3',

      name: 'Neymar',
      team: 'PSG',
      image: 'https://wallpaper.dog/large/5558811.jpg'
    },
    {
      id: '4',

      name: 'Harry Kane',
      team: 'Tottenham',
      image:
        'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMjYwNDAyNTE5MTg4ODQw/sipa_33489412.jpg'
    },
    {
      id: '5',

      name: 'Cristiano Ronaldo',
      team: 'Juventus',
      image:
        'https://i0.wp.com/www.itl.cat/pngfile/big/285-2855103_cristiano-ronaldo-juventus-2019.jpg'
    },
    {
      id: '6',

      name: 'Kevin De Bruyne',
      team: 'Man City',
      image: 'https://cdn.wallpapersafari.com/44/99/RsjmNP.jpg'
    },
    {
      id: '7',

      name: 'Robert Lewandowski',
      team: 'Bayern Munich',
      image:
        'https://img.fcbayern.com/image/upload/t_cms-9x12/f_auto/w_660,h_880,c_fill/cms/public/images/fcbayern-com/homepage/saison-18-19/profis/lewandowski/190309_lewandowski_ima.jpg'
    },
    {
      id: '8',

      name: 'Romelu Lukaku',
      team: 'Chelsea',
      image: 'https://pbs.twimg.com/media/E8mvUWMXoAwk1lH.jpg'
    }
  ]
  return (
    <ScrollView>
      {data.map(item => {
        return (
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { item })}
            >
              <View style={styles.imageContainer}>
                <SharedElement id={`item.${item.id}`}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                </SharedElement>
              </View>
            </TouchableOpacity>
            <View style={styles.textContiner}>
              <Text>Name</Text>
              <SharedElement id={`item.${item.id}.name`}>
                <Text style={styles.name}>{item.name}</Text>
              </SharedElement>
              <Text>Club</Text>
              <SharedElement id={`item.${item.id}.team`}>
                <Text style={styles.club}>{item.team}</Text>
              </SharedElement>
              <TouchableOpacity
                onPress={() => props.navigation.push('Next', { item })}
              >
                <SharedElement id={`item.${item.id}.next`}>
                  <View
                    style={{
                      padding: 20,
                      backgroundColor: 'red',
                      width: '100%'
                    }}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white'
                      }}
                    >
                      See Page
                    </Text>
                  </View>
                </SharedElement>
              </TouchableOpacity>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    marginRight: 15,
    width: w100 / 3,
    height: 600 / 3
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 20
  },
  textContiner: {
    maxWidth: '50%',
    overflow: 'hidden'
  },
  name: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  club: {
    fontSize: 18
  },
  card: {
    elevation: 3,
    borderRadius: 20,
    shadowColor: 'gray',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    flexDirection: 'row'
  }
})

export default ListScreen
