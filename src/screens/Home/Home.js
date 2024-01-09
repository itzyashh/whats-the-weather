import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { s } from './Home.style'
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'
import openMeteo from '../../api/openMeteo'
import Txt from '../../components/Txt/Txt'
import WeatherBasic from '../../components/WeatherBasic/WeatherBasic'

const Home = () => {
    const [coords, setCoords] = useState(null)
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        requestLocationPermission()
        
    }, [])

    useEffect(() => {
        if (coords) {
            getWeatherByCoords()
        }
    }
    , [coords])

    console.log(coords)
    const requestLocationPermission = async () => {
        const { status } = await requestForegroundPermissionsAsync();
        if (status == 'granted') {
            const location = await getCurrentPositionAsync()
            setCoords(location.coords)
            return
        }
        setCoords({
            latitude: 28.7041,
            longitude: 77.1025
        })
     
    }

    const getWeatherByCoords = async () => {
        try {
            console.log('api called')
            const response = await openMeteo.get('/forecast',{
               params: {
                   latitude: coords.latitude,
                   longitude: coords.longitude,
                   daily: 'weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max',
                   timezone: 'auto',
                   current_weather: true,
                   forecast_days: 1,
               }
            })
            setWeather(response.data)
            }
        catch (error) {
            console.log('wee',error)
        }
    }
    

  return (
    <>

    <View style={s.basic_weather}>
    {  !!weather && <WeatherBasic weather={weather}/>}
    </View>
    <View style={s.searchbar_container}>
       <Txt
       selectable={true}
       >Home</Txt>
    </View>
    <View style={s.weather_advanced}>
         <Txt>Home</Txt>
    </View>
    </>
  )
}

export default Home

