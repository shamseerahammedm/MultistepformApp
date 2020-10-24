import { combineReducers } from 'redux';
import categoriesReducer from './categories/categories.reducer';






const rootReducer = combineReducers({
    categoriesReducer : categoriesReducer
})


export default rootReducer;