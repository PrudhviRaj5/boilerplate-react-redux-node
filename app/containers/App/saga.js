import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
// import axios from 'utils/axios-base';
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_AUTH_CHECK,
} from './constants';
import {
  userLoginInitiate,
  userLoginSuccess,
  userLoginError,
  // userLogoutInitiate,
  userLogoutSuccess,
  // userLogoutError,
  userAuthCheckInitiate,
  userAuthCheckSuccess,
  userAuthCheckError,
  // userAuthClear,
} from './actions';


export function* userLogoutSaga() {
  yield call([localStorage, 'removeItem'], 'session_token');
  yield call([localStorage, 'removeItem'], 'persist:root');
  yield put(userLogoutSuccess());
}


export function* userLoginSaga(action) {
  yield put(userLoginInitiate());
  const { payload } = action;
  const { username, password, pushRoute } = payload;
  if (username === 'demo' && password === 'demo') {
    yield localStorage.setItem(
      'session_token',
      'demo',
    );
    yield put(userLoginSuccess({
      id: 1,
      email: username,
      sessionToken: 'demo',
    }));
    yield put(pushRoute());
  } else {
    yield put(userLoginError());
  }
  // try {
  //   const url = '/api/auth/v1/login';
  //   const config = {
  //     headers: {
  //     },
  //   };

  //   const response = yield axios.post(url, payload, config);
  //   if (response.data.status.message === 'success') {
  //     yield localStorage.setItem(
  //       'session_token',
  //       response.data.payload.session_token,
  //     );
  //     yield put(userLoginSuccess());
  //   }
  // } catch (err) {
  //   const errorMessage = { errorMessage: err.response.data };
  //   console.log('error', errorMessage);
  // }
}

export function* userAuthCheckSaga() {
  yield put(userAuthCheckInitiate());
  const session_token = yield localStorage.getItem('session_token');
  if (!session_token && session_token !== 'demo') {
    yield put(userAuthCheckError());
  } else {
    yield put(userAuthCheckSuccess({
      id: 1,
      email: 'demo',
      sessionToken: 'demo',
    }));
    // const payload = {
    //   session_token,
    // };
    // const url = '/api/auth/v1/verify';
    // const config = {
    //   headers: {
    //   },
    // };
    // try {
    //   const response = yield axios.post(url, payload, config);
    //   if (response.status === 200) {
    //     yield put(userLoginSuccess());
    //   } else {
    //     yield put(userLogoutSuccess());
    //   }
    // } catch (err) {
    //   yield put(userLogoutSuccess());
    // }
  }
}

export default function* userAuth() {
  yield takeLatest(USER_LOGIN, userLoginSaga);
  yield takeLatest(USER_LOGOUT, userLogoutSaga);
  yield takeLatest(USER_AUTH_CHECK, userAuthCheckSaga);
}
