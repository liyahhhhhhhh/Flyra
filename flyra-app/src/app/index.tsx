
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const BLUE = '#1248B8';
const MIDNIGHT = '#0B1D3A';
const DUSK = '#3B6EC2';
const ICE = '#9AC2EA';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>FLYRA</Text>
          <Text style={styles.profile}>✦</Text>
        </View>

        <Text style={styles.greeting}>YOUR MUSIC.</Text>
        <Text style={styles.title}>Your atmosphere.</Text>

        <Text style={styles.section}>Recently played</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.album}>
            <View style={styles.artwork}>
              <Text style={styles.artworkText}>FLYRA</Text>
            </View>
            <Text style={styles.albumTitle}>Your favourites</Text>
            <Text style={styles.artist}>Your personal collection</Text>
          </View>

          <View style={styles.album}>
            <View style={[styles.artwork, styles.secondArtwork]}>
              <Text style={styles.artworkText}>01</Text>
            </View>
            <Text style={styles.albumTitle}>Recently played</Text>
            <Text style={styles.artist}>Listen again</Text>
          </View>
        </ScrollView>

        <Text style={styles.section}>Made for you</Text>

        <View style={styles.feature}>
          <Text style={styles.featureLabel}>YOUR PERSONAL LIBRARY</Text>
          <Text style={styles.featureTitle}>Everything you love, in one place.</Text>
          <Text style={styles.featureText}>
            Your music journey starts here.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.navigation}>
        <Text style={styles.activeTab}>⌂ {'\n'}Home</Text>
        <Text style={styles.tab}>⌕ {'\n'}Search</Text>
        <Text style={styles.tab}>▤ {'\n'}Library</Text>
        <Text style={styles.tab}>⚙ {'\n'}Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MIDNIGHT,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 42,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: 5,
  },
  profile: {
    color: ICE,
    fontSize: 26,
  },
  greeting: {
    color: ICE,
    fontSize: 12,
    letterSpacing: 4,
    marginLeft: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
    marginHorizontal: 24,
    marginTop: 8,
    marginBottom: 32,
  },
  section: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
    marginLeft: 24,
    marginBottom: 18,
    marginTop: 12,
  },
  album: {
    width: 160,
    marginLeft: 24,
    marginBottom: 28,
  },
  artwork: {
    width: 160,
    height: 160,
    borderRadius: 14,
    backgroundColor: BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondArtwork: {
    backgroundColor: DUSK,
  },
  artworkText: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: 4,
  },
  albumTitle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
    marginTop: 12,
  },
  artist: {
    color: ICE,
    fontSize: 12,
    marginTop: 5,
  },
  feature: {
    backgroundColor: '#122B50',
    marginHorizontal: 24,
    padding: 22,
    borderRadius: 18,
    marginBottom: 30,
  },
  featureLabel: {
    color: ICE,
    fontSize: 10,
    letterSpacing: 2,
  },
  featureTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '800',
    marginTop: 14,
  },
  featureText: {
    color: ICE,
    marginTop: 10,
    fontSize: 13,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#09172E',
    paddingVertical: 15,
    paddingBottom: 25,
  },
  activeTab: {
    color: ICE,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
  },
  tab: {
    color: '#7892B8',
    textAlign: 'center',
    fontSize: 12,
  },
});
