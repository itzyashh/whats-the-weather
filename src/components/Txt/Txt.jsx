import { Text } from 'react-native'
import React from 'react'
import { s } from './Txt.style'

const Txt = ({children,style,...props}) => {


  return <Text
    style={[s.txt,style]}
    {...props}
  >{children}</Text>
  
}

export default Txt
