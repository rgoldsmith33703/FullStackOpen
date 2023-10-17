import { useState } from 'react'
import Search from './components/Search'


const App = () => {
  
  const [searchTerm, setSearchTerm] = useState('')
  
  function handleSearch(e) {
    setSearchTerm(e.target.value)
  }
  
  return (
    <Search 
      searchTerm={searchTerm}
      text={'find countries'}
      handleSearch={handleSearch}  
    />
  )
}

export default App