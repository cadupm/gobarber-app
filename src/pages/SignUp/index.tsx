import React, { useRef, useCallback } from 'react'
import { Image, KeyboardAvoidingView, Platform, ScrollView, View, TextInput } from 'react-native'

import logoImg from '../../assets/logo.png'
import Icon from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Title, BackToSignIn, BackToSignInText } from './styles'

const SignUp: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null)

  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const handleSignUp = useCallback(data => {
    console.log(data)
  }, [])

  return (
  <>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
      <ScrollView contentContainerStyle={{ flex: 1}} keyboardShouldPersistTaps="handled" >
        <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus()
                }}
              />

              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus()
                }}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm() }}
              />

              <Button onPress={() => {
                formRef.current?.submitForm()
              }}>Cadastrar</Button>
            </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <BackToSignIn onPress={() => navigation.goBack()}>
      <Icon name="arrow-left" size={18} color="#F4EDE8" />
      <BackToSignInText>Voltar para o login</BackToSignInText>
    </BackToSignIn>

  </>
  )
}

export default SignUp
