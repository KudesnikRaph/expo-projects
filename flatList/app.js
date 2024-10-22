// App.js
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, RefreshControl } from 'react-native';
import languageItem from './languageItem.js';

const langs = [
  { id: '1', lang: 'JavaScript' },
  { id: '2', lang: 'Python' },
  { id: '3', lang: 'Java' },
  { id: '4', lang: 'C#' },
  { id: '5', lang: 'Ruby' },
];

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={langs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <languageItem lang={item.lang} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
