import * as ActionTypes from "../Constants/Constants";

const initialState = {
  count: 0,
};
const itemReducer = (state = initialState, action ={}) => {
    console.log("action "+action);
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return { count: state.count + 1 };
    case ActionTypes.REMOVE_ITEM:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default itemReducer;