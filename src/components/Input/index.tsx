import React from 'react'
import { TextInputProps } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Container, InputArea } from './styles'

interface InputProps extends TextInputProps {
  name: string
  icon: string
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest}) => {
  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <InputArea {...rest} placeholderTextColor="#666360" />
    </Container>
  )
}

export default Input
