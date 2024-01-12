// import { SaveGame, writeSaveGame, readSaveGame } from './SaveFile.ts'
import {deckFetch} from '@Functions/ApiManager.ts'


function startUp(setActualDeck){
  console.log("RUN ONCE")
 deckFetch(setActualDeck)

  // writeSaveGame(gameSave1)
  // readSaveGame()
  // console.log("game save details:", gameSave1)


}
  export {startUp}