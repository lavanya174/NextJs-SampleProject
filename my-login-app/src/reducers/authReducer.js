const initialState = {
  loggedIn: false,
  users: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
      };
    case 'SET_USERS':
      console.log("add fetched user details into redux",action.payload);
      return {
        ...state,
        users: action.payload,
      };
    case 'ADD_USER':
      console.log("addded_user",state.users)
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default authReducer;
