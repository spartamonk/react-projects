import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import Error from './Error'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const removeTour = (id) => {
    // const newTours = tours.filter(tour => tour.id !== id);
    // setTours(newTours);
    setTours((currTours) => {
      return currTours.filter((tour) => tour.id !== id)
    })
  }

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json()
        setIsLoading(false)
        setTours(data)
      } else {
        setIsError(true)
        setIsLoading(false)
        throw new Error(response.statusText)
      }
    } catch (error) {
      console.log('error')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (isError) {
    return (
      <main>
        <Error />
      </main>
    )
  }
  if (tours.length <= 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' type='button' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
