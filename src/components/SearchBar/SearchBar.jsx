import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { s } from './SearchBar.style'

const SearchBar = ({onSubmit}) => {
  return (
    <View>
        <TextInput
        style={s.input}
            placeholder='Type a city... e.g. Delhi'
            onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
            autoCorrect={false}
            clearButtonMode='always'
            autoCapitalize='none'
            autoComplete='off'
        />
            
    </View>
  )
}

export default SearchBar