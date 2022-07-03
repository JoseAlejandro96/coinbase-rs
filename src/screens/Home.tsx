import React, { useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import CBButton from '../components/CBButton';
import Colors from '../constants/Colors';

import { useDispatch, useSelector } from 'react-redux';
import Whatchlist from '../components/Whatchlist';
import * as watchListActions from '../store/actions/watchlist';
import * as topmoversAction from '../store/actions/topmovers';
import { TopmoversState } from '../store/reducers/topmovers';
import { WatchlistState } from '../store/reducers/watchlist';

interface RootState {
  watchlist: WatchlistState;
  topmovers: TopmoversState;
}

const Home = () => {
  const watchListData = useSelector(
    (state: RootState) => state.watchlist.watchlistData
  );

  const topMoversData = useSelector(
    (state: RootState) => state.topmovers.topMoversData
  );

  const dispatch = useDispatch();

  const loadData = () => {
    try {
      dispatch(watchListActions.fetchCoinData());
      dispatch(topmoversAction.fetchTopMoversData());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Image
          style={styles.image}
          source={{ uri: 'http://i.imgur.com/9EEaSaS.png' }}
        />
        <Text style={styles.title}>Welcome to Coinbase!</Text>
        <Text style={styles.subtitle}>Make your first investment today</Text>
        <CBButton title='Get Started' />

        <Whatchlist coinData={watchListData} />
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
    color: Colors.subtitle,
  },
});

export default Home;
