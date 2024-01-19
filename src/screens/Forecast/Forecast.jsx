import { View, Text } from 'react-native'
import React from 'react'
import Txt from '../../components/Txt/Txt'
import Header from '../../components/Header/Header'
import { useRoute } from '@react-navigation/native'
import ForecastListItem from '../../components/ForecastListItem/ForecastListItem'

const Forecast = () => {
  const weather = useRoute().params.weather
  const city = useRoute().params.city
  const forecastList = weather.daily.time.map((time, index) => {

    const getDay = (time) => {
      const day = new Date(time).getDay()
      switch (day) {
        case 0:
          return 'SUN'
        case 1:
          return 'MON'
        case 2:
          return 'TUE'
        case 3:
          return 'WED'
        case 4:
          return 'THU'
        case 5:
          return 'FRI'
        case 6:
          return 'SAT'
      }
    }
    return (
      <ForecastListItem
        key={time}
        day={getDay(time)}
        date={time}
        temp={weather?.daily?.temperature_2m_max[index]+'°'}
      />
    )
  })
  return (
    <View>
      <Header city={city} />
      <View style={{marginBottom: 80}}/>
      {forecastList}
    </View>
  )
}

export default Forecast