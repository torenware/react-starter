
export const TOGGLE_LOGIN = 'toggle-login';
export const loginAction = (dispatch) => {
  console.log('called the action');
  console.log(dispatch);
  return {
    type: TOGGLE_LOGIN
  }
};
