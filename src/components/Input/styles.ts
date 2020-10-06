import styled, { css } from 'styled-components/native'

interface ContainerProps {
  isFocused: boolean

}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;

  ${props => props.isFocused && css`
    border-color: #ff9000;
  `}
`

export const InputArea = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  margin-left: 12px;
`
