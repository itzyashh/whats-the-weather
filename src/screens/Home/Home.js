import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { s } from './Home.style'
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'
import openMeteo from '../../api/openMeteo'

const Home = () => {
    const [coords, setCoords] = useState(null)

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
            console.log('wee')
            const response = await openMeteo.get('/forecast',{
               params: {
                   latitude: coords.latitude,
                   longitude: coords.longitude,
                   longitude: coords.longitude,
                   daily: 'weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max',
                   timezone: 'auto',
                   current_weather: true
               }
            })
            console.log('weeSuccess',response.data)
            }
        catch (error) {
            console.log('wee',error)
        }
    }
    

  return (
    <>

    <View style={s.basic_weather}>
      <Text>Home</Text>
    </View>
    <View style={s.searchbar_container}>
      <Text>Home</Text>
    </View>
    <View style={s.weather_advanced}>
      <Text>Home</Text>
    </View>
    </>
  )
}

export default Home

