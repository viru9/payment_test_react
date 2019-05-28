import { combineReducers } from 'redux';
import HomeReducer from './home/home';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  payment: HomeReducer
});

export default rootReducer;
