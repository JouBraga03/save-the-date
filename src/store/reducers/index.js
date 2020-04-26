const INITIAL_STATE = {
  engagedName: "",
  fianceName: "",
  backgroundImage: "",
  positionText: "",
  weddingDate: "",
};

export default function configs(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case "SET_CONFIGS": {
      const values = actions.payload;

      return {
        ...state,
        ...values,
      };
    }

    default:
      return state;
  }
}
