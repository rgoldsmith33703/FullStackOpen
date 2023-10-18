const Search = ({searchTerm, handleSearch, text}) => {
  
  return (
    <>
      {text}
      <input 
        type='search'
        value={searchTerm}
        onChange={handleSearch} 
      />
    </>
  )
}

export default Search