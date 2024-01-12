'use client'
// import './globals.css';
import { useState,useEffect } from 'react';
// import { NameForm, ProfessionForm } from './UserInput'  
import{CardPlay} from '@/Functions/Tests'
import{GetCard} from '@/Functions/ApiManager'
import { StartUp } from '@/Functions/Startup';
import {  writeSaveGame, readSaveGame } from '../../Functions/SaveFile'
export default function Chapter2(){
    return(
<main>
<h1>Chapter 2
    <br/>
    The Caves of Something or Other
</h1>
    <div className="Ui">
        <p >
          Click here to create a save or Load a save
          If you have not created a name you will not be able to save your story
        </p>
        {/* <button onClick={()=>{writeSaveGame(name,actualDeckUrl,profession,deckDecisions)}}>Save game</button> 
        
        <button onClick={()=>{readSaveGame(name,setDeckDecisions,setActualDeckUrl,setProfession)}}>Load previous Save</button>  */}

    </div>
<div>
    <p>
        You have found yourself in the caves, near to Hound's Tooth, you strike a torch up, it's like flickers only a short distance ahead of you barely cutting into the darkness.
        THE STORY CONTINUES WITH MORE STUFF
    </p>
</div>
</main>
)
    }