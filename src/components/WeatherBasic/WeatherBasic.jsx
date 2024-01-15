import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Txt from '../Txt/Txt'
import { s } from './WeatherBasic.style'
import { getWeatherInterpretation, weatherInterpretation } from '../../utils/meteoUtils'
import { FontAwesome5} from '@expo/vector-icons';
import Clock from '../Clock/Clock'

import googleMaps from '../../api/googleMaps'
import { useNavigation } from '@react-navigation/native'

const WeatherBasic = ({weather}) => {
    const temperature = Math.round(weather.current_weather.temperature)
    const weatherCode = weather.current_weather.weathercode
    const interpretation = getWeatherInterpretation(weatherCode)
    const [city, setCity] = useState(' ')
    const navigation = useNavigation()
    useEffect(() => {
      getCity()
    }, [weather])

    const getCity = async () => {
      console.log('google api called')
      try {
        const response = await googleMaps.get('/geocode/json', {
          params: {
            latlng: `${weather.latitude},${weather.longitude}`,
            result_type: 'locality',
            key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
          }
        })
        setCity(response.data.results[0]?.address_components[0]?.long_name)
        console.log(response.data.results[0]?.address_components[0]?.long_name)
      }
      catch (error) {
        console.log(error)
      }
    }

  return (<>

    <View style={s.clock}>
    <Clock />
    </View>
    <View style={s.city}>
    <Txt>{city}</Txt>
    </View>
    <View style={s.interpretation}>
    <Txt style={s.interpretationText}>{interpretation?.label}</Txt>
    </View>
    <TouchableOpacity
    opacity={.9}
    onPress={() => navigation.navigate('Forecast')}
     style={s.temperatureContainer}>
    <Txt
    style={s.temperature}
    >{temperature}°</Txt>
    <FontAwesome5 name={interpretation?.icon} style={s.icon} color="black" />
  </TouchableOpacity>
    </>
  )
}

export default WeatherBasic

const styles = StyleSheet.create({})