import action from "../Redux/Action";

const intialuserstate = {
  user: undefined,
};
const reducer = (state = intialuserstate, actions) => {
  switch (actions.type) {
    case action.SET_USER:
      return {
        user: actions.payload,
      };
    default:
      return state;
  }
};
export default reducer;
