import { ADD_CHANGE_TRANSFER, CURRENT_USER } from "../actions/UserActions";

const initialState = {
  currentUser: "",
  hasTransfer: false,
  notification: ''
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case ADD_CHANGE_TRANSFER:
      console.log(action.payload)
      return {
        ...state,
        hasTransfer: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
