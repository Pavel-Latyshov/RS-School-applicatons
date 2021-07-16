import { combineReducers } from 'redux';
import { CategoriesReducer } from './categories-reducer';
import { WordsReducer } from './words-reducer';
import { UserReducer } from './user-reducer';

export const RootReducer = combineReducers({
  users: UserReducer,
  words: WordsReducer,
  category: CategoriesReducer,
});
