// this is where we are going to create our context
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// Initial State

const initialState = {
  transactions: [],
};

//Create Context

export const GlobalContext = createContext(initialState);

//Provider Component --so that all other components can access this global state

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function deleteTransactions(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransactions(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
