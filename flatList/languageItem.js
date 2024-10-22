import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const languageItem = ({ lang }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:JavaScript-logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.text}>{lang}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default languageItem;
