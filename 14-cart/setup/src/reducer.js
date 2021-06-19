const reducer =(state, action)=> {
if (action.type === 'REMOVE_ALL') {
 return {
  ...state,
  cart: []
 }
} 
if (action.type === 'REMOVE_ITEM') {
 const newList = state.cart.filter(item=> item.id !== action.payload)
 return {
  ...state,
  cart: newList
 }
}
if (action.type === 'TOGGLE_ITEM') {
 const cartContent = state.cart.map(item => {
  if(item.id === action.payload.id) {
   if(action.payload.type === 'increase') {
    return {...item, amount: item.amount+1}
   }
   if(action.payload.type === 'decrease') {
    return {...item, amount: item.amount-1}
   }
  }
  return item
 }).filter(item => item.amount !== 0)
 return {
  ...state,
  cart: cartContent
 }
}
if (action.type === 'TOTALS') {
 let {totalItems, cartTotal} = state.cart.reduce((total, item)=> {
  const {amount, price}= item;
  const totalPrice = amount * price
  total.totalItems +=amount;
  total.cartTotal +=totalPrice;
  return total
 },
 {totalItems:0, cartTotal: 0})
cartTotal= parseFloat(cartTotal.toFixed(2))
 return {
  ...state,
  total: cartTotal,
  amount: totalItems
 }
}
if(action.type === 'LOADING') {
 return {
  ...state, 
  isLoading: true
 }
}
if (action.type === 'FETCH_CART') {
 return {
  ...state,
  isLoading: false,
cart: action.payload
 }
} 
throw new Error('no matching action type')
}

export default reducer