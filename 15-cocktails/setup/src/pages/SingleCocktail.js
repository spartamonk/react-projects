import React from 'react'
import Loading from '../components/Loading'
import {useGlobalContext} from '../context'
import { useParams, Link } from 'react-router-dom'



const SingleCocktail = () => {
  const { fetchDetails, isLoading, singleCocktail } = useGlobalContext()
  const {id}= useParams();
  React.useEffect(() => {
    fetchDetails(id)
  }, [id, fetchDetails])
 if(isLoading) {
   return (
     <Loading />
   )
 }
 if(!singleCocktail) {
   return (
     <h2 className="section-title">no cocktail to display</h2>
   )
 }
const { name, category, type, glass, instructions, image, ingredients } = singleCocktail
  return (
    <section className='section cocktail-section'>
      <Link className='btn btn-primary' to='/'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {type}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {
              ingredients.map((item, index) => {
                return (
                   item?  <span key={index}>{item}</span> : null
                )
              })
            }
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
