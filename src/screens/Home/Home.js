import { RefreshControl, ScrollView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { s } from './Home.style'
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'
import openMeteo from '../../api/openMeteo'
import Txt from '../../components/Txt/Txt'
import WeatherBasic from '../../components/WeatherBasic/WeatherBasic'
import WeatherAdvance from '../../components/WeatherAdvance/WeatherAdvance'
import SearchBar from '../../components/SearchBar/SearchBar'
import openMeteoGeocoding from '../../api/openMeteoGeocoding'

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
            const response = await openMeteo.get('/forecast', {
                params: {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    daily: 'weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max',
                    timezone: 'auto',
                    current_weather: true,
                    forecast_days: 7,
                }
            })
            setWeather(response.data)
        }
        catch (error) {
            console.log('wee', error)
        }
    }

    const getCityByName = async (city) => {
        console.log(city)
        try {
            const response = await openMeteoGeocoding.get('/search', {
                params: {
                    name: city,
                    count: 1,
                    language: 'en'
                }
            })
            setCoords({
                latitude: response.data.results[0].latitude,
                longitude: response.data.results[0].longitude
            })
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <ScrollView
            contentContainerStyle={s.scrollview}
         style={s.container}>
         <RefreshControl
            refreshing={false}
            onRefresh={getWeatherByCoords}
            />
            <View style={s.basic_weather}>
                {!!weather && <WeatherBasic weather={weather} />}
            </View>
            <View style={s.searchbar_container}>
               <SearchBar onSubmit={getCityByName} />
            </View>
            <View style={s.weather_advanced}>
                {!!weather && <WeatherAdvance weather={weather} />}
            </View>
            </ScrollView>
    )
}

export default Home

