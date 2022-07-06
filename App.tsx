import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppNavigator from './src/navigation/AppNavigator';
import watchlistReducer from './src/store/reducers/watchlist';
import topmoversReducer from './src/store/reducers/topmovers';
import newsReducer from './src/store/reducers/news';

const rootReducer = combineReducers({
  watchlist: watchlistReducer,
  topmovers: topmoversReducer,
  news: newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
