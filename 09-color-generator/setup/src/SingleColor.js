import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, hex, weight, index}) => {
  const [isAlert, setIsAlert] = useState(false);
  const bcg =rgb.join();
 const hexValues = rgbToHex(...rgb);
 const copyToClipboard =()=> {
   navigator.clipboard.writeText(`#${hex}`);
   setIsAlert(true);
 }
 useEffect(()=> {
   const timeout= setTimeout(()=>{
     setIsAlert(false);
   }, 2000)
   return ()=> clearTimeout(timeout)
 }, [isAlert]);
 
  return (
    <article className="color" style={{backgroundColor: `rgb(${bcg})`}} onClick={copyToClipboard}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValues}</p>
      {
        isAlert && <p>copied to clipboard</p>
      }
  </article>
  )
}

export default SingleColor
