import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/theme';
import { useFlyraTheme } from '@/context/theme-context';

export default function HomeScreen() {
  const { mode } = useFlyraTheme();
  const c = Colors[mode];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.background }}
      contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
      <View style={s.header}>
        <Text style={[s.logo, { color: c.text }]}>FLYRA</Text>
        <Text style={{ color: c.accent, fontSize: 23 }}>✦</Text>
      </View>

      <Text style={[s.eyebrow, { color: c.accent }]}>YOUR MUSIC.</Text>
      <Text style={[s.heading, { color: c.text }]}>Your atmosphere.</Text>
      <Text style={[s.description, { color: c.secondary }]}>
        A space for everything you love.
      </Text>

      <Text style={[s.section, { color: c.text }]}>Recently played</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={s.album}>
          <View style={[s.art, { backgroundColor: '#1248B8' }]}>
            <Text style={s.artText}>FLYRA</Text>
          </View>
          <Text style={[s.albumTitle, { color: c.text }]}>Your favourites</Text>
          <Text style={[s.sub, { color: c.secondary }]}>Your personal collection</Text>
        </View>
        <View style={s.album}>
          <View style={[s.art, { backgroundColor: '#3B6EC2' }]}>
            <Text style={s.artText}>01</Text>
          </View>
          <Text style={[s.albumTitle, { color: c.text }]}>Recently played</Text>
          <Text style={[s.sub, { color: c.secondary }]}>Listen again</Text>
        </View>
      </ScrollView>

      <Text style={[s.section, { color: c.text }]}>Made for you</Text>
      <View style={[s.feature, { backgroundColor: c.card }]}>
        <Text style={[s.eyebrow, { color: c.accent }]}>YOUR PERSONAL LIBRARY</Text>
        <Text style={[s.featureTitle, { color: c.text }]}>
          Everything you love, in one place.
        </Text>
        <Text style={[s.sub, { color: c.secondary }]}>
          Your music journey starts here.
        </Text>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  content: { paddingTop: 24, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, marginBottom: 44 },
  logo: { fontFamily: 'UnisonBold', fontSize: 27, letterSpacing: 5 },
  eyebrow: { fontFamily: 'UnisonBold', fontSize: 11, letterSpacing: 3, marginHorizontal: 24 },
  heading: { fontFamily: 'UnisonBold', fontSize: 32, marginHorizontal: 24, marginTop: 9 },
  description: { fontFamily: 'UnisonLight', fontSize: 14, marginHorizontal: 24, marginTop: 8 },
  section: { fontFamily: 'UnisonBold', fontSize: 21, marginLeft: 24, marginTop: 38, marginBottom: 18 },
  album: { width: 160, marginLeft: 24 },
  art: { width: 160, height: 160, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
  artText: { color: '#FFFFFF', fontFamily: 'UnisonBold', fontSize: 24, letterSpacing: 4 },
  albumTitle: { fontFamily: 'UnisonBold', fontSize: 14, marginTop: 12 },
  sub: { fontFamily: 'UnisonLight', fontSize: 12, marginTop: 5 },
  feature: { marginHorizontal: 24, padding: 22, borderRadius: 18 },
  featureTitle: { fontFamily: 'UnisonBold', fontSize: 23, marginTop: 15, marginBottom: 8 },
});
