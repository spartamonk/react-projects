import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Home = () => {
  const { toggleSidebar, toggleModal, removeSidebar } = useGlobalContext()
  
  return (
    <main onClick={(e) => removeSidebar(e)} className='hide-sidebar'>
      <button className='sidebar-toggle' onClick={toggleSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={toggleModal}>
        show modal
      </button>
    </main>
  )
}

export default Home
