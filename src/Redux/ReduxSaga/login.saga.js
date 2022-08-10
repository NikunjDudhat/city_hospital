import { call, put, takeEvery, all } from 'redux-saga/effects'
import { LoginApi, SignUpApi } from '../../common/api/login.api';
import { history } from '../../history';

import { setAlert } from '../Action/alert.action';
import { EmailVerify, LogginUser } from '../Action/auth.action';
import * as ActionType from '../ActionType'


function* signUpsaga(action) {

   try {
      const user = yield call(SignUpApi, action.payload);
      yield put(setAlert({text: user.payload, color: "success"}))
   } catch (e) {
      yield put(setAlert({text: e.payload, color: "error"}))
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* loginsaga(action) {
   try {
      const user = yield call(LoginApi, action.payload); 
      history.push('/');
      yield put(setAlert({text: "Login Successfully", color: "success"}))
      yield put(LogginUser(user.user));
      console.log(user);
   } catch (e){
      yield put(setAlert({text: e.payload, color: "error"}))
      console.log(e);
   }
}

function* watchsaga() {
  yield takeEvery(ActionType.LOGIN_USER, loginsaga);
}

function* signInsaga() {
   yield takeEvery(ActionType.SIGNUP_USER, signUpsaga);
}

export function* loginSagaCall () {
    yield all ([
      watchsaga(),
      signInsaga()
   ])
}
