import {combineReducers} from 'redux';
import {saveLocation} from './locationReducer';

export const Reducers = combineReducers({
    locationState: saveLocation,
});