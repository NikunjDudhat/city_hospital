import { call, put, takeEvery, all } from 'redux-saga/effects'
import { LoginApi } from '../../common/api/login.api';
import * as ActionType from '../ActionType'


function* loginsaga(action) {
   try {
      const user = yield call(LoginApi(), action.payload);
      yield put({type: ActionType.EMAIL_VERIFY, payload: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchsaga() {
  yield takeEvery(ActionType.LOGIN_USER, loginsaga);
}

export function* loginSagaCall () {
    yield all ([watchsaga])
}
