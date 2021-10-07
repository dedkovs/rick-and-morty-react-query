import { combineReducers } from 'redux';
import characters from './slices/characters.slice';
import error from './slices/error.slice';
import pagination from './slices/pagination.slice';

const rootReducer = combineReducers({
  characters,
  error,
  pagination,
});

export default rootReducer;
