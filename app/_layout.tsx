
import { Stack } from 'expo-router';
import { useTheme } from '@/theme/theme';

export default function AppLayout() {
  const { theme } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="post/[id]" options={{ title: 'Post' }} />
      <Stack.Screen
        name="compose"
        options={{
          title: 'Compose',
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
