const Search = ({searchTerm, text, handleSearch}) => {
  return (
    <>
      {text}
      <input 
        value={searchTerm}
        onChange={handleSearch} 
      />
    </>
  )
}

export default Search