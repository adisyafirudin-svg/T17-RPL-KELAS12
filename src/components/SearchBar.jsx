function SearchBar({ query, onQueryChange, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch()
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Cari judul film... (contoh: Batman)"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <button type="submit" className="search-bar__button">
        Cari
      </button>
    </form>
  )
}

export default SearchBar