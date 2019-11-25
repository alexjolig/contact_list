import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import {CONFIG_JSON } from '../config'
import {UPDATE_CONTACTS, REFRESH_CONTACTS, changeLetter} from './actions';

function* fetchContacts() {
    const res = yield axios.get(`${CONFIG_JSON.userUrl}?results=${CONFIG_JSON.numberCards}&seed=abc`);
    let contactList = res.data.results;
    yield put({ type: UPDATE_CONTACTS, contacts: contactList });
    yield put(changeLetter("a", contactList));
  }

  function* actionWatcher() {
    yield takeLatest(REFRESH_CONTACTS, fetchContacts)
  }

  export default function* rootSaga() {
     yield all([
       actionWatcher(),
     ]);
  }
