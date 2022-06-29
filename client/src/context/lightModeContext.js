import { createContext, useReducer } from 'react';
import LightModeReducer from './lightModeReducer';

const INITIAL_STATE = {
  lightMode: false,
};

export const LightModeContext = createContext(INITIAL_STATE);

export const LightModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LightModeReducer, INITIAL_STATE);

  return (
    <LightModeContext.Provider value={{ lightMode: state.lightMode, dispatch }}>
      {children}
    </LightModeContext.Provider>
  );
};
