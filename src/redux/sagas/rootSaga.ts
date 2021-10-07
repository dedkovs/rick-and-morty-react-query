import { all } from 'redux-saga/effects';
import { watchCharacterNameChanged } from './watchCharacterNameChanged';
import { watchPageNumberChanged } from './watchPageNumberChanged';

export function* rootSaga() {
  yield all([watchCharacterNameChanged(), watchPageNumberChanged()]);
}
