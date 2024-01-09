import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Txt from '../Txt/Txt'
import { StyledContainer, StyledLabel, StyledValue, s } from './WeatherAdvance.style'
import { convertToHHMM } from '../../utils/date-time'

const WeatherAdvance = ({weather}) => {
  const sunrise = weather?.daily?.sunrise
  const sunriseFormatted = convertToHHMM(sunrise)
  const sunset = weather?.daily?.sunset
  const sunsetFormatted = convertToHHMM(sunset)
  return (
    <View style={s.container}>
        <StyledContainer>
            <StyledValue>{sunriseFormatted}</StyledValue>
            <StyledLabel>Sunrise</StyledLabel>
        </StyledContainer>
        <StyledContainer>
            <StyledValue>{sunsetFormatted}</StyledValue>
            <StyledLabel>Sunset</StyledLabel>
        </StyledContainer>
        <StyledContainer>
            <StyledValue>{weather?.current_weather?.windspeed} km/h</StyledValue>
            <StyledLabel>Wind speed</StyledLabel>
        </StyledContainer>
    </View>
  )
}

export default WeatherAdvance

const styles = StyleSheet.create({})