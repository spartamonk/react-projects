import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [value, setValue]= useState(0);

  const fetchJobs = async() => {
    setIsLoading(true);
    const response = await fetch(url);
    try {
      if(response.status >=200 && response.status <= 299) {
        const data = await response.json();
        setJobs(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(response.statusText);
      }
    }
    catch(error) {
      console.log(error);
    }
  } 
  useEffect(()=> {
    fetchJobs();
  },[]);
  if(isLoading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    )
  }
  if(isError) {
    return (
      <section className='section loading'>
        <h1>error...</h1>
      </section>
    )
  }
  const {id, title, dates, duties, company} = jobs[value];
  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            const { company, id } = job
            return (
              <button key={id} className={`job-btn ${value === index && 'active-btn'}`} onClick={()=> setValue(index)}>
                {company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"/>
                  <p>{duty}</p>
                </div>
              )
            })
          }
        </article>
      </div>
    </section>
  )
}

export default App
