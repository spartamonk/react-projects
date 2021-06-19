export const reducer=(state, action)=> {
if (action.type === 'OPEN_SIDEBAR') {
 return {
  ...state,
  isSidebarOpen: true
 }
}
if(action.type === 'CLOSE_SIDEBAR') {
 return {
  ...state,
  isSidebarOpen: false
 }
}
if(action.type === 'REMOVE_SIDEBAR') {
 return {
  ...state,
  isSidebarOpen: false
 }
 
}
if (action.type === 'OPEN_SUBMENU') {
  const btnPosition = action.payload.getBoundingClientRect();
  const center = (btnPosition.left + btnPosition.right)/2;
  const bottom = btnPosition.bottom-3;
  
  const singlePage = state.pages.find((link) => link.page === action.payload.textContent)
 
  return {
   ...state,
  page: singlePage.page,
  links: singlePage.links,
  location: {center, bottom},
  isSubmenuOpen: true,
  
  }
}
if (action.type === 'CLOSE_SUBMENU') {
 return {
  ...state,
  isSubmenuOpen: false
 }
}

throw new Error('no matching action type')
}