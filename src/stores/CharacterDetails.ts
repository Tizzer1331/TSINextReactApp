import { create } from 'zustand'

type CharacterSheet={
name:string
health:number
profession:string
deckUrl:string
deckDecisions:[]
}

interface CharacterSheetStore {
    characterSheet:CharacterSheet;
    changeName:(to:string)=>void
    changeProfession:(to:string)=>void
    // increaseHealth:(by:number)=>void
    // decreaseHealth:(by:number)=>void
    // changeDeckUrl:(to:string)=>void
    // addDeckDecisions:(deckDecisions:[])=>void
    
}

export const useCharacterSheetStore = create<CharacterSheetStore>()((set)=>({
characterSheet:{name:"",health:13, profession:"Warrior", deckUrl:"", deckDecisions:[]},
changeName:(name)=>set((state)=>{
    const newSheet = {...state.characterSheet}
    newSheet.name=name
    return {characterSheet:newSheet}
    }),
changeProfession:(profession)=>set((state)=>{
    const newSheet = {...state.characterSheet}
    newSheet.profession=profession
    return {characterSheet:newSheet}
    })
// addDeckDecisions:(deckDecisions) => (state => ({deckDecisions: [...state.deckDecisions, deckDecisions]}))
}))

