const Search = ({search, text, handleSearch}) => {
  return (
    <>
      {text}
      <input 
        value={search}
        onChange={handleSearch} 
      />
    </>
  )
}

export default Search