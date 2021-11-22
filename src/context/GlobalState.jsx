import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  people: [

  ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{
      users: state.users
    }}>

    </GlobalContext.Provider>
  )
}
