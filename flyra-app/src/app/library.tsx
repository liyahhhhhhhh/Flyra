import { View, Text, ScrollView } from 'react-native';
import { Colors } from '@/constants/theme';
import { useFlyraTheme } from '@/context/theme-context';

export default function LibraryScreen() {
  const { mode } = useFlyraTheme();
  const c = Colors[mode];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.background }} contentContainerStyle={{ padding: 25, paddingTop: 35 }}>
      <Text style={{ color: c.text, fontFamily: 'UnisonBold', fontSize: 32 }}>Library</Text>
      <Text style={{ color: c.secondary, fontFamily: 'UnisonLight', marginTop: 8, fontSize: 14 }}>Your music, all in one place.</Text>
      {['Playlists', 'Artists', 'Albums', 'Songs', 'Downloaded'].map((item, i) => (
        <View key={item} style={{ backgroundColor: c.card, borderRadius: 15, padding: 20, marginTop: 17, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: c.accent, fontSize: 20, marginRight: 16 }}>{['♫', '♬', '▣', '♪', '↓'][i]}</Text>
          <Text style={{ color: c.text, fontFamily: 'UnisonBold', fontSize: 16 }}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
