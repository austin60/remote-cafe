import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './redux/reducers/productReducers';
import { ordersReducer } from './redux/reducers/ordeReducer';
import {composeWithDevTools} from '@redux-devtools/extension';
import logger from 'redux-logger'

const initState={};

const store=createStore(
    combineReducers({
         data:productsReducer,
         orders:ordersReducer
}),
initState,
composeWithDevTools(applyMiddleware(logger,thunk))
);

export default store;