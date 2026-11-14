import { DarkTheme, DefaultTheme, ThemeProvider as RouterThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import AppTabs from '@/components/app-tabs';
import { ThemeProvider, useFlyraTheme } from '@/context/theme-context';

SplashScreen.preventAutoHideAsync();

function AppContent() {
  const { mode } = useFlyraTheme();

  const [loaded, error] = useFonts({
    UnisonLight: require('../../assets/fonts/Type Juice - Unison Pro Light.otf'),
    UnisonLightRound: require('../../assets/fonts/Type Juice - Unison Pro Light Round.otf'),
    UnisonLightRoundItalic: require('../../assets/fonts/Type Juice - Unison Pro Light Round Italic.otf'),
    UnisonLightItalic: require('../../assets/fonts/Type Juice - Unison Pro Light Italic.otf'),
    UnisonBold: require('../../assets/fonts/Type Juice - Unison Pro Bold.otf'),
    UnisonBoldRound: require('../../assets/fonts/Type Juice - Unison Pro Bold Round.otf'),
    UnisonBoldRoundItalic: require('../../assets/fonts/Type Juice - Unison Pro Bold Round Italic.otf'),
    UnisonBoldItalic: require('../../assets/fonts/Type Juice - Unison Pro Bold Italic.otf'),
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <RouterThemeProvider value={mode === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      <AppTabs />
    </RouterThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
