import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()
const initialState = {
  cart: cartItems,
  isLoading: false,
  amount: 0,
  total: 0
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart =()=> {
    dispatch({type: 'REMOVE_ALL'})
  }
  const removeItem =(id)=> {
    dispatch({type: 'REMOVE_ITEM', payload: id})
  }
  const toggleItem =(id, type)=> {
    dispatch({type: 'TOGGLE_ITEM', payload: {id, type} })
  }
  
  useEffect(()=> {
    dispatch({ type: 'TOTALS' })
  },[state.cart])
  
  const fetchCart = async()=> {
    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({ type: 'FETCH_CART', payload: data })
    } catch(error){
      console.log(error);
    }
  }
  useEffect(()=> {
    dispatch({type: 'LOADING'})
    fetchCart();
    
  },[])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        toggleItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
