import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Txt from '../Txt/Txt'
import { s } from './WeatherBasic.style'
import { getWeatherInterpretation, weatherInterpretation } from '../../utils/meteoUtils'
import { FontAwesome5} from '@expo/vector-icons';
const WeatherBasic = ({weather}) => {
    const temperature = Math.round(weather.current_weather.temperature)
    const weatherCode = weather.current_weather.weathercode
    const interpretation = getWeatherInterpretation(weatherCode)
    console.log(weatherCode)
    console.log(interpretation)



  return (<>

    <View style={s.clock}>
    <Txt>Clock</Txt>
    </View>
    <View style={s.city}>
    <Txt>City</Txt>
    </View>
    <View style={s.interpretation}>
    <Txt style={s.interpretationText}>{interpretation?.label}</Txt>
    </View>
    <View style={s.temperatureContainer}>
    <Txt
    style={s.temperature}
    >{temperature}°</Txt>
    <FontAwesome5 name={interpretation?.icon} style={s.icon} color="black" />
  </View>
    </>
  )
}

export default WeatherBasic

const styles = StyleSheet.create({})