const INITIAL_STATE = {
  userEmail: '',
  userSignedIn: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {...state, userSignedIn: true, userEmail: action.userEmail}
      break;

    case 'SIGN_OUT':
      return {...state, userSignedIn: false, userEmail: null}
      break
      
    default:
      return state
      break;
  }
}

export default userReducer;