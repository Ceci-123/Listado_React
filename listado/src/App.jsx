//import React from 'react'
import './App.css'
import Cards from '../components/cards'
import result from './assets/result.json'

function App() {
  const movies = result.Search
  return (
    <>
     <Cards/>
     <main>
      
      <ul>
        {movies.map(movie =>(
          <li key={movie.Id}>
            <h3>{movie.Title}</h3>
            <h4>{movie.Type}</h4>
            <h5>{movie.Cantidad}</h5>
          </li>
        ))}
      </ul>
     </main>
    </>
  )
}

export default App
