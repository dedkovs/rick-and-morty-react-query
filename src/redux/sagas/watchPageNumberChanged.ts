import axios from 'axios';
import { takeLatest, delay, put, select } from 'redux-saga/effects';
import { setFilteredCharactersFromApi } from '../slices/characters.slice';
import { CharactersResponseFromApi } from '../slices/characters.types';

const CHARACTER_BASE_URL = 'https://rickandmortyapi.com/api/character';
const DEBOUNCE_DELAY = 500;

export const getCharacterName = (state: any): any =>
  state.characters.characterName;

export const getPageNumber = (state: any): any => state.pagination.pageNumber;

export function* handlePageNumberChanged(): Generator {
  const pageNumber = yield select(getPageNumber);
  const characterName = yield select(getCharacterName);

  yield delay(DEBOUNCE_DELAY);

  try {
    const apiResponse = yield axios
      .get(`${CHARACTER_BASE_URL}/?page=${pageNumber}&name=${characterName}`)
      .then((res) => res.data);
    const filteredCharactersFromApi = (apiResponse as CharactersResponseFromApi)
      .results;
    yield put(setFilteredCharactersFromApi(filteredCharactersFromApi));
  } catch (err) {
    console.error(err);
  }
}

export function* watchPageNumberChanged() {
  yield takeLatest('PAGE_NUMBER_CHANGED', handlePageNumberChanged);
}
