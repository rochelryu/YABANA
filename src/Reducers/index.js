import { combineReducers } from 'redux'
import CompareReducer from './CompareReducer';
import PannierReducer from './PannierReducer';

const allReducers = combineReducers({
    compare : CompareReducer,
    pannier : PannierReducer
})
export default allReducers;