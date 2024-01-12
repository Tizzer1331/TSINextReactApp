import {useState} from 'react';


function NameForm({setName}){
  const [newName, setNewName]= useState("");
  const handleSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      setName(newName)
      console.log(newName)
      alert('The Name you entered was: ' + newName) 
    }
  return(
    <form onSubmit={handleSubmit} data-testid="NameInputTextBox" >
      <label>
        Character Name
      <br/>
      <input type="text" value={newName}
      onChange={(e) => setNewName(e.target.value)}/>
      </label>
      <input type = "submit" value="Confirm Name"/>
    </form>


  )
}

function ProfessionForm({setProfession}){
  const [newProfession, setNewProfession]=useState("")
  const handleSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      setProfession(newProfession)
     
    } 
  return(
    <form onSubmit={handleSubmit}>
      <label>
        Profession
      
      <br/>
      <select onChange={(e) => setNewProfession(e.target.value)}>
        <option value="Warrior">Warrior</option>
        <option value="Rogue">Rogue</option>
        <option value="Wizard">Wizard</option>
        </select>
        </label>
      <input type = "submit" value="Confirm Profession"/>
    </form>
  )

}





export {NameForm, ProfessionForm }