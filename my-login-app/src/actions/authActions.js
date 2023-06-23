export const login = (users) => {
  return {
    type: 'LOGIN',
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const setUsers = (users) => {
  return {
    type: 'SET_USERS',
    payload: users,
  };
};

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: user,
  };
};
