import { AnyAction, combineReducers } from "redux";

const reducer: (state: any, action: AnyAction) => any = (state = {}, action) => {
  switch (action.type) {
    // ...
    default:
      return state;
  }
};

export default reducer;
