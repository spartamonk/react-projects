import React, { useState} from 'react';


const FetchColors = (Values) => {
 
 const [color, setColor] = useState('')
 const [colorList, setColorList] = useState(new Values('#f15025').all(10))
 const [isError, setIsError] = useState(false)

 const handleSubmit = (e) => {
   e.preventDefault()
   try {
     const colors = new Values(color).all(10)
     setColorList(colors)
     setIsError(false)
   } catch (error) {
     console.log(error)
     setIsError(true)
   }
 }
 return {
  color, colorList, setColor, isError, handleSubmit
 }
}

export default FetchColors
