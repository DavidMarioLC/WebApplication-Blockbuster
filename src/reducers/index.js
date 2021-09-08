import * as actions from "../actionTypes/index.js";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIES:
      return {
        ...state,
        caloriesAdd: state.caloriesAdd + action.payload.value,
      };

    case actions.SET_FILTER:
      return {
        ...state,
        totalCalories: state.totalCalories - action.payload.value,
      };

    default:
      return state;
  }
};

export { reducer };
