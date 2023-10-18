const LanguageList = ({ languages }) => {
  let languageList = []
  for (let i of Object.values(languages)) {
    languageList.push(i)
  }
  return (
    <>
      {languageList.map(language => {
        return <li key={language}>{language}</li>
      })}
    </>
  )
}

export default LanguageList