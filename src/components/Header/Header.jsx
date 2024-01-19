import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Txt from '../Txt/Txt'
import { useNavigation } from '@react-navigation/native'
import { s } from './Header.style'

const Header = ({city}) => {
    const nav = useNavigation()
  return (
    <View style={s.container}>
        <TouchableOpacity onPress={() => nav.goBack()}>
            <Txt
                style={s.backButton}
            >{'<'}</Txt>
        </TouchableOpacity>
        <View style={s.textContainer}>
            <Txt>{city}</Txt>
            <Txt
            style={s.forecast}
            >7 days forecast</Txt>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})