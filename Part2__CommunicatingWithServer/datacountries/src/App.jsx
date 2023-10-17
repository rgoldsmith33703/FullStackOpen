import { useState } from 'react'
import Search from './components/Search'


const App = () => {
  
  const [search, setSearch] = useState('')
  
  function handleSearch(e) {
    setSearch(e.target.value)
  }
  
  return (
    <Search 
      search={search}
      text={'find countries'}
      handleSearch={handleSearch}  
    />
  )
}

export default App