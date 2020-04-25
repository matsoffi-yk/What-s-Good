import { combineReducers } from 'redux';
import { FoodReducer } from './Food/reducer';

export const reducers = combineReducers({
    foods: FoodReducer
})