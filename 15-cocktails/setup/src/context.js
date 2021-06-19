import React, { useContext, useEffect, useReducer } from 'react'
import { useCallback } from 'react'
import reducer from './Reducer/Reducer'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const urlCocktailDetails =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const AppContext = React.createContext()

const initialState = {
  isLoading: true,
  cocktails: [],
  singleCocktail: null,
  searchInput: 'a',
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchCocktails = useCallback(async () => {
    dispatch({ type: 'LOADING' })
    try {
      const response = await fetch(`${url}${state.searchInput}`)
      const data = await response.json()
      const { drinks } = data

      if (drinks) {
        dispatch({ type: 'DRINKS', payload: drinks })
      } else {
        dispatch({ type: 'NO_DRINKS', payload: [] })
      }
    } catch (error) {
      dispatch({ type: 'ERROR' })
      console.log(error)
    }
  },[state.searchInput])
  useEffect(() => {
    fetchCocktails()
  }, [state.searchInput, fetchCocktails])

  const handleInput = (e) => {
    dispatch({ type: 'SEARCH_TEXT', payload: e.target.value })
  }
  const fetchDetails = useCallback(
    async (id) => {
      dispatch({ type: 'LOADING' })
      try {
        const response = await fetch(`${urlCocktailDetails}${id}`)
        const data = await response.json()
        if (data) {
          const {
            strDrink: name,
            strCategory: category,
            strAlcoholic: type,
            strGlass: glass,
            strInstructions: instructions,
            strDrinkThumb: image,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
          ]
          const drinkDetails = {
            name,
            category,
            type,
            glass,
            instructions,
            image,
            ingredients,
          }
          dispatch({ type: 'NEW_DRINKS', payload: drinkDetails })
        } else {
          dispatch({ type: 'NO_DRINK_DETAIL', payload: null })
        }
      } catch (error) {
        dispatch({ type: 'ERROR' })
        console.log(error)
      }
    },
    []
  )

  return (
    <AppContext.Provider value={{ ...state, handleInput, fetchDetails }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
