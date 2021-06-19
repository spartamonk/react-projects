import React, { useRef, useEffect } from 'react'
import {useGlobalContext} from './context'
const Submenu = () => {
  const {isSubmenuOpen, page,links, location} = useGlobalContext();
  const {center, bottom} = location
  const submenuContainer = useRef(null);
 
  useEffect(()=> {
    
    submenuContainer.current.style.left=`${center}px`
    submenuContainer.current.style.top =`${bottom}px`
    
  },[location, links])
  return (
    <aside
      ref={submenuContainer}
      className={`submenu ${isSubmenuOpen && 'show'}`}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center col-${(links.length===2 && 2) || (links.length ===3 && 3) || (links.length >3 && 4) }`}>
          {
            links.map((link, index) => {
              const {url, label, icon} = link;
              return (
                <a href={url} key={index}>{icon}{label}</a>
              )
            })
          }
        </div>
      </section>
    </aside>
  )
}

export default Submenu
