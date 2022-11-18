import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  search: { padding: 16, backgroundColor: 'green' },
  list: { flex: 1, padding: 16, backgroundColor: 'blue' },
});
