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
      return {
        ...state,
        engagedName: actions.payload.engagedName || state.engagedName,
        fianceName: actions.payload.fianceName || state.fianceName,
        backgroundImage:
          actions.payload.backgroundImage || state.backgroundImage,
        positionText: actions.payload.positionText || state.positionText,
        weddingDate: actions.payload.weddingDate || state.weddingDate,
      };
    }

    default:
      return state;
  }
}
