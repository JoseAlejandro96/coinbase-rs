import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Portfolio = () => {
  return (
    <View style={styles.screen}>
      <Text>Portfolio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Portfolio;
