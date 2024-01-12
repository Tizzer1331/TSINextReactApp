export {SaveGame}
export{writeSaveGame}
export{readSaveGame}


//

// SAVE CLASS 2
class SaveGame{
    ID:number
    charName:string;
    deckUrl:string;
    profession:string;
    health:number
    saveDecisions:Array<number>
    constructor(
        ID:number,
        charName:string,
        deckUrl:string,
        profession:string,
        health:number,
        saveDecisions:Array<number>
    )
    {
    this.ID=ID
    this.charName=charName;
    this.deckUrl=deckUrl;
    this.profession=profession;
    this.health=health;
    this.saveDecisions=saveDecisions;
    }
}

function readSaveGame(saveName:string,setDeckDecisons, setActualDeckUrl, setProfession){
    if( saveName ==""){
        alert("Please enter the name for the save and your character")
    }
    else {
    try{
    console.log("READ FILE: "+localStorage.getItem(saveName))
    const localData=localStorage.getItem(saveName)
    const saveData =JSON.parse(localData)
    if (!saveData){
        throw new SyntaxError ("Incomplete Data: No Save found")
    }
    
    setDeckDecisons(saveData.saveDecisions)
    setActualDeckUrl(saveData.deckUrl)
    setProfession(saveData.profession)
    } 
    
    catch(error){
    alert("alert please write a saved character name")
    }
}
}

function writeSaveGame(saveName:string, actualDeckUrl:string, profession:string, deckDecisions:Array<number>){
    if( saveName ==""){
        alert("Please enter a name for the save and your character")
    }
    else {
        const gameSave1 = new SaveGame(
            1331,
            saveName,
            actualDeckUrl,
            profession, 
            13,
            deckDecisions
          )
        localStorage.setItem(saveName,JSON.stringify(gameSave1))
        console.log(localStorage.getItem(saveName))
    }
}
