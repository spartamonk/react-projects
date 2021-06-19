import React, { useEffect } from 'react'

const Alert = ({alertType, alertText, removeAlert}) => {
  useEffect(()=> {
    const timeout = setTimeout(()=>{
      removeAlert();
    }, 3000)
    return ()=> clearTimeout(timeout)
  },[removeAlert])
  return <p className={`alert alert-${alertType}`}>{alertText}</p>
}

export default Alert
