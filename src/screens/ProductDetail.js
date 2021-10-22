import React from 'react'
import { View, Text } from 'react-native'

export default function ProductDetail({ navigation, route }) {
  const { data } = route.params;
  return (
    <View>
      <Text>ProductDetail</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  )
}
