import { createStore } from "redux";

const initialState = {
  message: "Ce message dans le store n'a encore jamais été modifié !",
};

/*export const updateMessage = (newMessage) => ({
  type: "CHANGE_MESSAGE",
  payload: newMessage,
});
*/

const rootReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_MESSAGE") {
    state.message = action.payload;
    return state;
  } else {
    return state;
  }
};

const store = createStore(rootReducer);

export default store;
