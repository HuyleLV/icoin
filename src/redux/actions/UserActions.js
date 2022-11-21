export const CURRENT_USER = "CURRENT_USER";
export const ADD_CHANGE_TRANSFER = "ADD_CHANGE_TRANSFER";

export const addCurrentUser = data=> async (dispatch) => {
  dispatch({
    type: CURRENT_USER,
    payload: data,
  });
};

export const addChangeTransfer = data=> async (dispatch) => {
  console.log('đã zô', data)
  dispatch({
    type: ADD_CHANGE_TRANSFER,
    payload: data,
  });
};
