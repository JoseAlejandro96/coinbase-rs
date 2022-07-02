import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Colors from '../constants/Colors';
import CBButton from '../components/CBButton';

import { WatchlistState } from '../store/reducers/watchlist';
import { useSelector, useDispatch } from 'react-redux';
import * as watchListActions from '../store/actions/watchlist';

const Home = () => {

  const dispatch = useDispatch();

  const loadData = () => {
    try{
      dispatch(watchListActions.fetchCoinData());
    } catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    loadData();
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
      >
        <Image
          style={styles.image}
          source={{ uri: 'http://i.imgur.com/9EEaSaS.png' }}
        />
        <Text style={styles.title}>Welcome to Coinbase!</Text>
        <Text style={styles.subtitle}>Make your first investment today</Text>
        <CBButton title="Get Started"/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  image: {
    height: 250,
    width: 150,
    marginTop: 40,
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 17,
    marginBottom: 24,
    color: Colors.subtitle
  },
});

export default Home;
