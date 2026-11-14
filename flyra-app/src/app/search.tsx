import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Colors } from '@/constants/theme';
import { useFlyraTheme } from '@/context/theme-context';

export default function SearchScreen() {
  const { mode } = useFlyraTheme();
  const c = Colors[mode];
  const [query, setQuery] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: c.background, padding: 25, paddingTop: 35 }}>
      <Text style={{ color: c.text, fontFamily: 'UnisonBold', fontSize: 32 }}>Search</Text>
      <Text style={{ color: c.secondary, fontFamily: 'UnisonLight', marginTop: 8, marginBottom: 25 }}>Find something to listen to.</Text>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Artists, songs, albums..."
        placeholderTextColor={c.secondary}
        returnKeyType="search"
        style={{ backgroundColor: c.card, color: c.text, borderRadius: 14, padding: 17, fontFamily: 'UnisonLight', fontSize: 15 }}
      />
      <Text style={{ color: c.secondary, fontFamily: 'UnisonLight', marginTop: 25 }}>
        {query ? `Searching for “${query}”` : 'Your next favourite starts here.'}
      </Text>
    </View>
  );
}
