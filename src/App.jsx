import { useState, useEffect } from 'react'
import Navbar from './components/navbar.jsx'
import SearchBar from './components/SearchBar.jsx'
import MovieCard from './components/MovieCard.jsx'

const API_KEY = 'ISI_API_KEY_DI_SINI'
const BASE_URL = 'http://www.omdbapi.com/?apikey=b698f6ad&s'

function App() {
  const [movies, setMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const fetchMovies = async (keyword) => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(keyword)}`)
      const data = await response.json()

      if (data.Response === 'True') {
        setMovies(data.Search)
      } else {
        setMovies([])
        setErrorMessage('Film tidak ditemukan')
      }
    } catch (error) {
      setMovies([])
      setErrorMessage('Terjadi kesalahan saat mengambil data')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies('avengers')
  }, [])

  const handleSearch = () => {
    if (searchQuery.trim() === '') return
    fetchMovies(searchQuery)
  }

  return (
    <div className="app">
      <Navbar />

      <main className="app__content">
        <SearchBar
          query={searchQuery}
          onQueryChange={setSearchQuery}
          onSearch={handleSearch}
        />

        {isLoading && <p className="app__status">Loading...</p>}
        {!isLoading && errorMessage && <p className="app__status">{errorMessage}</p>}

        {!isLoading && !errorMessage && (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App