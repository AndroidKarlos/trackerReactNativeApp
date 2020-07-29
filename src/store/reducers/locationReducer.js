import {SAVE_LOCATION} from '../actions/actionsTypes'; 

const initialState = {};

export const saveLocation = (state, initialState, action) => {
    switch (action.type){
        case SAVE_LOCATION: 
        return {
            latitude: action.latitude,
            longitude: action.longitude,
            dateUTC: action.longitude,
            speed: action.speed,
            accuracy: action.accuracy,
        }
        default: return state;
    }
}