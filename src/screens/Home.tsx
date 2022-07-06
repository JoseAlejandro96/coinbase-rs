import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import CBButton from '../components/CBButton';
import Colors from '../constants/Colors';

import { NestableScrollContainer } from 'react-native-draggable-flatlist';
import { useDispatch, useSelector } from 'react-redux';
import TopMovers from '../components/TopMoversList';
import Whatchlist from '../components/Whatchlist';
import * as topmoversAction from '../store/actions/topmovers';
import * as watchListActions from '../store/actions/watchlist';
import * as newsActions from '../store/actions/news';

import { TopmoversState } from '../store/reducers/topmovers';
import { WatchlistState } from '../store/reducers/watchlist';
import { NewsState } from '../store/reducers/news';
import NewsList from '../components/NewsList';
import { RootStackParamList } from '../navigation/AppNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

interface RootState {
  watchlist: WatchlistState;
  topmovers: TopmoversState;
  news: NewsState;
}

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  const watchListData = useSelector(
    (state: RootState) => state.watchlist.watchlistData
  );

  const topMoversData = useSelector(
    (state: RootState) => state.topmovers.topMoversData
  );

  const newsData = useSelector((state: RootState) => state.news.newsData);

  const dispatch = useDispatch();

  const loadData = () => {
    try {
      dispatch(watchListActions.fetchCoinData());
      dispatch(topmoversAction.fetchTopMoversData());
      dispatch(newsActions.fetchNewsData());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const viewMoreHandler = () => {
    navigation.navigate('News');
  };

  return (
    <SafeAreaView style={styles.container}>
      <NestableScrollContainer contentContainerStyle={{ alignItems: 'center' }}>
        <Image
          style={styles.image}
          source={{ uri: 'http://i.imgur.com/9EEaSaS.png' }}
        />
        <Text style={styles.title}>Welcome to Coinbase!</Text>
        <Text style={styles.subtitle}>Make your first investment today</Text>
        <CBButton title='Get Started' />

        <Whatchlist coinData={watchListData} />

        <TopMovers coinData={topMoversData} />

        <NewsList
          isHomeScreen={true}
          newsData={newsData}
          viewMoreHandler={viewMoreHandler}
        />
      </NestableScrollContainer>
    </SafeAreaView>
  );
};

export const screenOptions = () => {
  return {
    headerShown: false,
  };
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
