import React, { useContext, useReducer } from 'react'
import reducer from './reducer'

const AppContext = React.createContext();
const initialState = {
 isModalOpen: false,
 isSidebarOpen: false,
}

const AppProvider = ({children})=>{
 const [state, dispatch] = useReducer(reducer, initialState);
 const toggleSidebar = () => {
   dispatch({ type: 'TOGGLE_SIDEBAR', payload: !state.isSidebarOpen })
 }
 const toggleModal = () => {
   dispatch({ type: 'TOGGLE_MODAL', payload: !state.isModalOpen })
 }
 const removeModal =(e)=> {
   dispatch({
     type: 'REMOVE_MODAL',
     payload: e.target.classList.contains('show-modal'),
   })
 }
 const removeSidebar =(e)=> {
   dispatch({
     type: 'REMOVE_SIDEBAR',
     payload: e.target.classList.contains('hide-sidebar'),
   })
 }

 return (
   <AppContext.Provider
     value={{
       ...state,
       toggleSidebar,
       toggleModal,
       removeModal,
       removeSidebar,
   
     }}
   >
     {children}
   </AppContext.Provider>
 )
} 

export const useGlobalContext =()=>{
 return useContext(AppContext);
}

export default AppProvider;