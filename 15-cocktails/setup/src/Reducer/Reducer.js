

const reducer = (state, action) => {
  if (action.type === 'LOADING') {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === 'DRINKS') {
    const newCocktails = action.payload.map((item) => {
      const {
        idDrink,
        strDrink,
        strCategory,
        strAlcoholic,
        strGlass,
        strDrinkThumb,
      } = item
      return {
        id: idDrink,
        name: strDrink,
        category: strCategory,
        type: strAlcoholic,
        glass: strGlass,
        image: strDrinkThumb,
      }
    })
    return {
      ...state,
      cocktails: newCocktails,
      isLoading: false,
    }
  }
  if (action.type === 'NO_DRINKS') {
    return {
      ...state,
      cocktails: action.payload,
      isLoading: false,
    }
  }
  if (action.type === 'ERROR') {
    return {
      ...state,
      isLoading: false,
    }
  }
  if (action.type === 'SEARCH_TEXT') {
    return {
      ...state,
      searchInput: action.payload,
    }
  }
  if (action.type === 'NEW_DRINKS') {
    return {
      ...state,
      singleCocktail: action.payload,
      isLoading: false,
    }
  }
  if (action.type === 'NO_DRINK_DETAIL') {
    return {
      ...state,
      singleCocktail: action.payload,
      isLoading: false,
    }
  }
  throw new Error('no matching action type')
}

export default reducer
