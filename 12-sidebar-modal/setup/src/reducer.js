

const reducer = (state, action) => {
 if (action.type === 'TOGGLE_SIDEBAR') {

  return {
   ...state,
   isSidebarOpen: action.payload
  }
 }
 if (action.type === 'TOGGLE_MODAL') {
  return {
   ...state,
   isModalOpen: action.payload
  }
 }
 if(action.type === 'REMOVE_MODAL') {
  if (action.payload) {
    return {
      ...state,
      isModalOpen: false,
    }
  } else {
   return state
  }
 }
 if (action.type === 'REMOVE_SIDEBAR') {
  if(action.payload) {
return {
  ...state,
  isSidebarOpen: false,
} 
  } else {
   return state
  }
   
 }
 
 
   throw new Error('no matching action type')
}

export default reducer
