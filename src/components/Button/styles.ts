import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 330px;
  height: 60px;
  border-radius: 10px;
  background: #FF9000;
  margin-top: 5px;

  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium'
`
