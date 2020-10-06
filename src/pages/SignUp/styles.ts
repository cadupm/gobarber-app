import styled from 'styled-components/native'
import { Platform } from 'react-native'


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150: 40}px;
`

export const Title = styled.Text`
  font-size: 22px;
  color: #F4EDE8;
  font-family: 'RobotoSlab-Medium';
  margin: 48px 0px 24px;
`

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #312E38;
  border-top-width: 2px;
  border-top-color: #232129;
  padding: 16px 0 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const BackToSignInText = styled.Text`
  font-size: 15px;
  color: #F4EDE8;
  font-family: 'RobotoSlab-Regular';
  margin-left: 10px;
`
