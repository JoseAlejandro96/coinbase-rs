import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const News = () => {
  return (
    <View style={styles.screen}>
      <Text>News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default News;
