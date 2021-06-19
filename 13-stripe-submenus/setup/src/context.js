import React, { useReducer, useContext } from 'react'
import sublinks from './data'
import {reducer} from './reducer'

const AppContext = React.createContext();
const initialState = {
  isSidebarOpen: false,
  isSubmenuOpen: false,
  location: {},
  page: '',
  links: [],
  pages: sublinks,
  
  
}


export const AppProvider =({children})=> {
 const [state, dispatch] = useReducer(reducer, initialState)
 const openSidebar =()=> {
  dispatch({type: 'OPEN_SIDEBAR'})
 }
 const closeSidebar =()=> {
   dispatch({ type: 'CLOSE_SIDEBAR' })
 }

 const removeSidebar =e=> {
  if(e.target.classList.contains('show')) {
   dispatch({type: 'REMOVE_SIDEBAR'})
  }
 }
 const openSubmenu =(e)=> {
dispatch({type: 'OPEN_SUBMENU', payload: e.target})
 }
 const closeSubmenu=(e)=> {
  
  if(!e.target.classList.contains('link-btn')) {
   dispatch({ type: 'CLOSE_SUBMENU' })
  }
 }
 
 return (
   <AppContext.Provider
     value={{
       ...state,
       openSidebar,
       closeSidebar,
       removeSidebar,
       openSubmenu,
       closeSubmenu,
     }}
   >
     {children}
   </AppContext.Provider>
 )
}

export const useGlobalContext =()=> {
 return useContext(AppContext);
}