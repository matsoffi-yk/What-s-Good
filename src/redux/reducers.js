import { combineReducers } from 'redux';
import { FoodReducer, FoodForm } from './Food/reducer';

export const reducers = combineReducers({
    foods: FoodReducer,
    form: FoodForm
})