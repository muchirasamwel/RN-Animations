import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import ListScreen from './ListScreen'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Easing } from 'react-native'
import NextScreen from './NextScreen'

import DeatailsLoader from '../DetailsLoader'
import HorizonScroll from '../HorizonScroll'
import ScrollMastery from '../ScrollMastery'
import DetailsScreen from './DetailsScreen'

const MainNavigation = () => {
  const Stack = createSharedElementStackNavigator()
  const Drawer = createDrawerNavigator()

  const StackNav = () => (
    <Stack.Navigator>
      <Stack.Screen
        name='List'
        options={{
          headerTitle: 'A SMALL GOAT LIST'
        }}
        component={ListScreen}
      />
      <Stack.Screen
        name='Details'
        component={DetailsScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: { duration: 300 }
            },
            close: { animation: 'timing', config: { duration: 300 } }
          }
          // cardStyleInterpolator: ({ current: { progress } }) => {
          //   return {
          //     cardStyle: {
          //       opacity: progress
          //     }
          //   }
          // }
        }}
        sharedElements={route => {
          return [
            'item.' + route.params.item.id,
            {
              id: 'item.' + route.params.item.id + '.name',
              animation: 'fade',
              resize: 'clip',
              align: 'auto'
            },
            {
              id: 'item.' + route.params.item.id + '.team',
              animation: 'fade',
              resize: 'clip',
              align: 'auto'
            }

            // {
            //   id: 'item.' + route.params.item.id,
            //   animation: 'move',
            //   resize: 'auto',
            //   align: 'auto'
            // }
          ]
        }}
      />
      <Stack.Screen
        name='Next'
        component={NextScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: { duration: 300 }
            },
            close: { animation: 'timing', config: { duration: 300 } }
          },
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress
              }
            }
          }
        }}
        sharedElements={route => {
          return [
            {
              id: 'item.' + route.params.item.id + '.next',
              animation: 'fade',
              resize: 'clip',
              align: 'auto'
            }
          ]
        }}
      />
    </Stack.Navigator>
  )
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={StackNav} />
        <Drawer.Screen name='HorizontalScroll' component={HorizonScroll} />
        <Drawer.Screen name='ScrollMaster' component={ScrollMastery} />
        <Drawer.Screen name='DetailsLoader' component={DeatailsLoader} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
