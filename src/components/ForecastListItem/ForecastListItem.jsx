import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Txt from '../Txt/Txt'
import { s } from './ForecastListItem.style'

const ForecastListItem = ({
    day,
    date,
    temp
}) => {
  return (
    <View style={s.container}>
        <Txt style={s.day}>{day}</Txt>
        <Txt style={s.date}>{date}</Txt>
        <Txt style={s.temp}>{temp}</Txt>
    </View>
  )
}

export default ForecastListItem

const styles = StyleSheet.create({})