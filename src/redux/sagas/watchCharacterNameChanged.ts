import axios from 'axios';
import { takeLatest, delay, put } from 'redux-saga/effects';
import {
  setCharacterName,
  setFilteredCharactersFromApi,
} from '../slices/characters.slice';
import { setCharacterNameError } from '../slices/error.slice';
import { setPagesCount } from '../slices/pagination.slice';
import {
  CharactersResponseFromApi,
  CHARACTER_NAME_CHANGED,
  Character,
} from '../slices/characters.types';

const INITIAL_FILTERED_CHARACTERS_FROM_API: Character[] = [];
const ERROR_NOT_FOUND = 'Nothing was found';
const CHARACTER_BASE_URL = 'https://rickandmortyapi.com/api/character';
const DEBOUNCE_DELAY = 500;
const INITIAL_PAGES_COUNT = 0;

function* handleCharacterNameChanged({
  type,
  payload,
}: {
  type: CHARACTER_NAME_CHANGED;
  payload: string;
}): Generator {
  const trimmedPayload = payload.trim();
  if (trimmedPayload === '') {
    yield put(
      setFilteredCharactersFromApi(INITIAL_FILTERED_CHARACTERS_FROM_API)
    );
    yield put(setPagesCount(INITIAL_PAGES_COUNT));
    yield put(setCharacterNameError(''));
    return;
  }
  yield delay(DEBOUNCE_DELAY);
  yield put(setCharacterName(trimmedPayload));
  try {
    const apiResponse = yield axios
      .get(`${CHARACTER_BASE_URL}/?name=${trimmedPayload}`)
      .then((res) => res.data);
    yield put(setCharacterNameError(''));
    const filteredCharactersFromApi = (apiResponse as CharactersResponseFromApi)
      .results;
    yield put(setFilteredCharactersFromApi(filteredCharactersFromApi));
    yield put(
      setPagesCount((apiResponse as CharactersResponseFromApi).info.pages)
    );
  } catch (err) {
    yield put(
      setFilteredCharactersFromApi(INITIAL_FILTERED_CHARACTERS_FROM_API)
    );
    yield put(setPagesCount(INITIAL_PAGES_COUNT));
    yield put(setCharacterNameError(ERROR_NOT_FOUND));
  }
}

export function* watchCharacterNameChanged() {
  yield takeLatest('CHARACTER_NAME_CHANGED', handleCharacterNameChanged);
}
