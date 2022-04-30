import { LOGIN_REQUEST } from './Types';

export function LoginUser(payload) {
  return function (dispatch) {
    testDelay();
    dispatch({
      type: LOGIN_REQUEST,
      payload: payload,
    });
  };
}

function testDelay() {
  setTimeout(function () {
    console.log('hellow from testdelay');
  }, 5000);
}
