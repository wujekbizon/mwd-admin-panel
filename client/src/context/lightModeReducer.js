const LightModeReducer = (state, action) => {
  switch (action.type) {
    case 'DARK': {
      return {
        lightkMode: false,
      };
    }
    case 'LIGHT': {
      return {
        lightMode: true,
      };
    }
    case 'TOGGLE': {
      return {
        lightMode: !state.lightMode,
      };
    }

    default:
      return state;
  }
};

export default LightModeReducer;
