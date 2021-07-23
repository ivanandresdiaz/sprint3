import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loggedReducer } from '../reducers/loggedReducer';
import { storagePerrosReducer } from '../reducers/storagePerrosReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  logged: loggedReducer,
  storagePerros: storagePerrosReducer,
});

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);
export default store;
