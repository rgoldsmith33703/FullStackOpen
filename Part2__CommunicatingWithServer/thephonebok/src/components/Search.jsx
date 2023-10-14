/* eslint-disable react/prop-types */
export default function Search({ search, handleSearch }) {
  return (
  <p>filter shown with
        <input 
          value={search}
          onChange={handleSearch}
        />
    </p>
  )
}