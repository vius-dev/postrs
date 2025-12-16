
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '@/theme/theme';

export default function SignInScreen() {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Placeholder for sign-in logic
    console.log('Signing in with', email, password);
  };

  const handleForgotPassword = () => {
    // Placeholder for forgot password logic
    console.log('Forgot password');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    card: {
      width: '80%',
      padding: 20,
      borderRadius: 10,
      backgroundColor: theme.card,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: theme.text,
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: theme.border,
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingLeft: 10,
      color: theme.text,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={theme.text}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={theme.text}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign In" onPress={handleSignIn} color={theme.primary} />
        <Button title="Forgot Password" onPress={handleForgotPassword} color={theme.secondary} />
        <Button title="Sign Up" onPress={() => router.push('/(auth)/sign-up')} />
      </View>
    </View>
  );
}
