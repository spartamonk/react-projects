import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [randomUser, setRandomUser] = useState(null)
  const [value, setValue] = useState('random person')
  const [title, setTitle] = useState('name')

  const getRandomPerson = async () => {
    setIsLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    const randomUser = data.results[0]
    const {
      name: { first, last },
      location: {
        street: { number, name },
      },
      email,
      login: { password },
      dob: { age },
      phone,
      picture: { large },
    } = randomUser
    const newUser = {
      name: `${first} ${last}`,
      address: `${number} ${name}`,
      email,
      password,
      age,
      phone,
      image: large,
    }
    setRandomUser(newUser);
    setIsLoading(true);
    setValue(name);
    setTitle('name');
  }

  useEffect(() => {
    getRandomPerson();
  }, [])

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={(randomUser.image && randomUser.image) || defaultImage}
            alt={randomUser.name}
            className='user-img'
          />
          <p className='user-title'>{`My ${title} is`}</p>
          <p className='user-value'>{randomUser.value}</p>
          <div className='values-list'>
            <button className='icon' data-label='name'>
              <FaUser />
            </button>
            <button className='icon' data-label='email'>
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age'>
              <FaCalendarTimes />
            </button>
            <button className='icon' data-label='address'>
              <FaMap />
            </button>
            <button className='icon' data-label='phone'>
              <FaPhone />
            </button>
            <button className='icon' data-label='password'>
              <FaLock />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
