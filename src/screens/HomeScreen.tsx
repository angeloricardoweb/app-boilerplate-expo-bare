import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import ButtonPrimary from '../components/buttons/ButtonPrimary'
import Container from '../components/layout/Container'

export default function HomeScreen() {
  const { navigate } = useNavigation() as NativeStackNavigationProp<any>;
  return (
    <View style={{ flex: 1}}>
      <Container>
        <ButtonPrimary handler={() => navigate('MyPixKeys')}>
          <Text>Minhas Chaves Pix</Text>
        </ButtonPrimary>
        <ButtonPrimary handler={() => navigate('HomeTabNavigation')}>
          <Text>Home Tab navigation</Text>
        </ButtonPrimary>
      </Container>

    </View>
  )
}
