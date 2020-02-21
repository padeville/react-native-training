import { AppState } from './types';
import { combineReducers, createStore } from 'redux';
import { ProductList } from './product-list/reducers';


const reducer = combineReducers({
    ProductList
});

export default createStore(
    reducer
)