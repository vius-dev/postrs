
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function RegisterScreen() {
  return (
    <View>
      <Text>Register</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Register" onPress={() => {}} />
    </View>
  );
}
