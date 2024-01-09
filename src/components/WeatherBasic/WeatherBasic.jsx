import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Txt from '../Txt/Txt'
import { s } from './WeatherBasic.style'
import { getWeatherInterpretation, weatherInterpretation } from '../../utils/meteoUtils'
import { FontAwesome5} from '@expo/vector-icons';
import Clock from '../Clock/Clock'
import nominatim from '../../api/nominatim'
const WeatherBasic = ({weather}) => {
    const temperature = Math.round(weather.current_weather.temperature)
    const weatherCode = weather.current_weather.weathercode
    const interpretation = getWeatherInterpretation(weatherCode)
    const [city, setCity] = useState(' ')

    useEffect(() => {
      getCity()
    }, [])

    const getCity = async () => {
      try {
        const response = await nominatim.get('/reverse',{
          params: {
            lat: weather.latitude,
            lon: weather.longitude,
            format: 'json'
          }
        })
        if (response.data.addresstype === 'village') {
        setCity(response.data.address.county)
        return 
        }
        setCity(response.data.address.city)
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