import React, {useEffect, useState} from 'react'
import { Image, KeyboardAvoidingView, Platform, View, ScrollView, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.png'

const SignIn: React.FC = () => {

  return (
    <>
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
        <Container>
          <Image source={logoImg} />

          <View>
            <Title>Faça seu login</Title>
          </View>
          <Input name="email" icon="mail" placeholder="E-mail"  />
          <Input name="Password" icon="lock" placeholder="Senha"  />

          <Button onPress={() => {}}>Entrar</Button>

          <ForgotPassword onPress={() => {}}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <CreateAccountButton onPress={() => {}}>
      <Icon name="log-in" size={18} color="#FF9000" />
      <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
    </CreateAccountButton>
    </>

   )
  }

export default SignIn
