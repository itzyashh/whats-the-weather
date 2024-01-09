import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Txt from '../Txt/Txt'
import currentHHMM from '../../utils/date-time'

const Clock = () => {

    const [time, setTime] = React.useState(currentHHMM())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(currentHHMM())
        }, 1000)
        return () => clearInterval(interval)
    }
    , [])
  return (
    <View>
      <Txt>{time}</Txt>
    </View>
  )
}

export default Clock

const styles = StyleSheet.create({})