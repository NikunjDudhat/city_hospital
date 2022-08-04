import { call, put, takeEvery, all } from 'redux-saga/effects'
import { LoginApi } from '../../common/api/login.api';
import { setAlert } from '../Action/alert.action';
import { EmailVerify } from '../Action/auth.action';
import * as ActionType from '../ActionType'


function* loginsaga(action) {
   try {
      const user = yield call(LoginApi, action.payload);
      // console.log(user);
      yield put(setAlert({text: user.payload, color: "success"}))
      // yield put(EmailVerify(user));
   } catch (e) {
      yield put(setAlert({text: e.payload, color: "error"}))
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchsaga() {
  yield takeEvery(ActionType.LOGIN_USER, loginsaga);
}

export function* loginSagaCall () {
    yield all ([watchsaga()])
}
