
import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@/theme/theme';

export default function AppLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ title: 'Login' }} />
        <Stack.Screen name="(auth)/sign-in" options={{ title: 'Sign In' }} />
        <Stack.Screen name="(auth)/sign-up" options={{ title: 'Sign Up' }} />
        <Stack.Screen name="(auth)/forgot-password" options={{ title: 'Forgot Password' }} />
        <Stack.Screen name="(compose)/compose" options={{ title: 'Compose' }} />
        <Stack.Screen name="(feed)/post" options={{ title: 'Post' }} />
        <Stack.Screen name="(modals)/quote" options={{ title: 'Quote' }} />
        <Stack.Screen name="(modals)/poll" options={{ title: 'Poll' }} />
        <Stack.Screen name="(profile)/[username]" options={{ title: 'Profile' }} />
      </Stack>
    </ThemeProvider>
  );
}
