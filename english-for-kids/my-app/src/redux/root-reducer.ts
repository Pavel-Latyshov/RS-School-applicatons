import { CategoriesReducer } from './categories-reducer';
import { WordsReducer } from './words-reducer';
import { UserReducer } from './user-reducer';
import { combineReducers } from "redux";

export const RootReducer = combineReducers({
    users: UserReducer,
    words: WordsReducer,
    category: CategoriesReducer
})