import { View, Text, Switch, ScrollView } from 'react-native';
import { Colors } from '@/constants/theme';
import { useFlyraTheme } from '@/context/theme-context';

export default function SettingsScreen() {
  const { mode, setMode } = useFlyraTheme();
  const c = Colors[mode];
  const dark = mode === 'dark';

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.background }} contentContainerStyle={{ padding: 25, paddingTop: 35 }}>
      <Text style={{ color: c.text, fontFamily: 'UnisonBold', fontSize: 32 }}>Settings</Text>
      <Text style={{ color: c.secondary, fontFamily: 'UnisonLight', marginTop: 8, marginBottom: 30 }}>Make FLYRA yours.</Text>

      <Text style={{ color: c.secondary, fontFamily: 'UnisonBold', fontSize: 11, letterSpacing: 2, marginBottom: 12 }}>APPEARANCE</Text>
      <View style={{ backgroundColor: c.card, borderRadius: 16, padding: 18, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, paddingRight: 12 }}>
          <Text style={{ color: c.text, fontFamily: 'UnisonBold', fontSize: 16 }}>Dark mode</Text>
          <Text style={{ color: c.secondary, fontFamily: 'UnisonLight', fontSize: 12, marginTop: 5 }}>
            {dark ? 'Midnight mode is on' : 'Light appearance is on'}
          </Text>
        </View>
        <Switch value={dark} onValueChange={(value) => setMode(value ? 'dark' : 'light')} />
      </View>

      <Text style={{ color: c.secondary, fontFamily: 'UnisonBold', fontSize: 11, letterSpacing: 2, marginTop: 32, marginBottom: 12 }}>ABOUT</Text>
      <View style={{ backgroundColor: c.card, borderRadius: 16, padding: 18 }}>
        <Text style={{ color: c.text, fontFamily: 'UnisonBold', fontSize: 17 }}>FLYRA</Text>
        <Text style={{ color: c.secondary, fontFamily: 'UnisonLight', fontSize: 13, marginTop: 5 }}>Your music. Your atmosphere.</Text>
        <Text style={{ color: c.secondary, fontFamily: 'UnisonLight', fontSize: 12, marginTop: 12 }}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
}
