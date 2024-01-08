import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Txt from '../Txt/Txt'
import { s } from './WeatherBasic.style'

const WeatherBasic = () => {
  return (<>

    <View style={s.clock}>
    <Txt>Clock</Txt>
    </View>
    <View style={s.city}>
    <Txt>City</Txt>
    </View>
    <View style={s.interpretation}>
    <Txt style={s.interpretationText}>Sunny</Txt>
    </View>
    <View style={s.temperatureContainer}>
    <Txt
    style={s.temperature}
    >3°</Txt>
    <Image
    style={s.image}/>
  </View>
    </>
  )
}

export default WeatherBasic

const styles = StyleSheet.create({})