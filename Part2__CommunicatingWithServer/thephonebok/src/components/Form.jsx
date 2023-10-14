/* eslint-disable react/prop-types */
import Input from '../components/Input'
import Button from '../components/Button'

export default function Form({newName, 
                              newNumber, 
                              handleNewName, 
                              handleNewNumber, 
                              addNewName}) {
  return (  
  <form>
      <h2>add a new</h2>
      <Input 
        text={"name"}
        value={newName}
        handleChange={handleNewName}
      />
      <Input 
        text={"number"}
        value={newNumber}
        handleChange={handleNewNumber}
      />
      <Button 
        text={"add"}
        type={"submit"}  
        handleClick={addNewName}
      />
    </form>
  )
}