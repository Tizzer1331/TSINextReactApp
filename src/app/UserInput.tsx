import {useState} from 'react';
import { useCharacterSheetStore } from "@/stores/CharacterDetails";


function NameForm(){
  const [newName, setNewName]= useState("");
  const {changeName,characterSheet} = useCharacterSheetStore(state=>state)
  const handleSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      changeName(newName)
      console.log(newName)
      // alert('The Name you entered was: ' + characterSheet.name) 
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



function ProfessionForm(){
  const [newProfession, setNewProfession]=useState("")
  const {changeProfession,characterSheet}=useCharacterSheetStore(state=>state)
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    changeProfession(newProfession)
    console.log(characterSheet.profession) 
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