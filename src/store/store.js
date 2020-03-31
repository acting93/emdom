import {createStore} from 'redux';
import cookieReducer from '../reducers/cookieReducer';
import cookieAction from '../actions/cookieAction';

const store = createStore(cookieReducer);


export default store;