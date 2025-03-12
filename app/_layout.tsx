import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"; // Use expo-status-bar instead of react-native StatusBar
import "./globals.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
