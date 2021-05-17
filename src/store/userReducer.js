const INITIAL_STATE = {
  userEmail: '',
  userSignedIn: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {...state, userSignedIn: true, userEmail: action.userEmail}

    case 'SIGN_OUT':
      return {...state, userSignedIn: false, userEmail: null}  
          
    default:
      return state
  }
}

export default userReducer;