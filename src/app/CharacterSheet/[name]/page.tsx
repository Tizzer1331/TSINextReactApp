'use client'
import '@/app/globals.css';
import { useCharacterSheetStore } from "@/stores/CharacterDetails";
interface CharacterSheetProps{
    params :{
        name:string
    }
}


export default function CharacterSheet({ params }:CharacterSheetProps){
    const {characterSheet} = useCharacterSheetStore((state)=>state)
    return(
        <main>
            <h1 className="titleSpeech">{params.name}</h1>
            <br/><br/><br/><br/><br/>
            <p className = "scrollText">
            Name: {characterSheet.name}
            <br/>
            Profession: {characterSheet.profession}
            </p>
        </main>
    )
}