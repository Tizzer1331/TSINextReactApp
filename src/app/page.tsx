'use client'

import './globals.css';
import { useState,useEffect } from 'react';
import {useRouter} from 'next/router'
import { NameForm, ProfessionForm } from './UserInput'  
import{CardPlay} from '@/Functions/Tests'
import{GetCard} from '@/Functions/ApiManager'
import{ CartChoice1SuccessUi, CartChoice1FailUi, CartChoice2SuccessUi, CartChoice2FailUi} from './DecisionUi/CartChoiceUi'
import{Choice2aFailUi,Choice2aSuccessUi} from "./DecisionUi/Choice2aUi"
import{Choice2bFailUi,Choice2bSuccessUi} from "./DecisionUi/Choice2bUi"
import{Choice2cFailUi,Choice2cSuccessUi} from "./DecisionUi/Choice2cUi"
import{Choice2dFailUi,Choice2dSuccessUi} from "./DecisionUi/Choice2dUi"
import {ChapterButton} from  './ChapterButton'
import { StartUp } from '@/Functions/Startup';
import {  writeSaveGame, readSaveGame } from '../Functions/SaveFile'





function App() {

const [name, setName]= useState("");
const [profession, setProfession]= useState("Warrior");
const [actualDeckUrl,setActualDeckUrl]=useState("");
const [deckDecisions,setDeckDecisions] =useState<number[]>([]);

async function HandleDecision(skillDiff:number,bonusProf:string,negaProf:string,decisionPoint:number){

  console.log("Printout of SkillDiff " + skillDiff);
  console.log("Deck ID before fetch " + actualDeckUrl);
  const cardValue = await GetCard(actualDeckUrl)
  console.log("Card Value "+cardValue)
  let finalSkillDiff=skillDiff
  if(profession===bonusProf){
    finalSkillDiff--
      }
      else if(profession===negaProf){
    finalSkillDiff++
      }
  if(cardValue>=finalSkillDiff){
        console.log("SUCCESS TEST AND CARD FETCH")
        setDeckDecisions([...deckDecisions,(decisionPoint+1)])
      }
  else if(cardValue<=finalSkillDiff){
        console.log("FAIL TEST AND CARD FETCH")
        setDeckDecisions([...deckDecisions,(decisionPoint+1)])
      }
    else{
      console.log("DECISION FAILED,NO CARD NO TEST RESULT")
    }
  }
  








useEffect(()=> {StartUp(setActualDeckUrl)},[])

  return (
    <>
      <header className="App-header">
        
      </header>
      <body className="background">

        
        <div className="titleSpeech">
        <h1>
          Dungeon Delve
        </h1>
        <h4>
          A fond farewell to Chose your own adventure stories
        </h4>
        </div>
        <br/><br/>
        <img className="treasureImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUT4qvrtfWdRkIGhuQZMFawtAsKd8uh5n-A&usqp=CAU" alt="treasure" />
        <p className="flavourText">
          Welcome Adventurer, your recent trip to the Caves of Forwick was most profitable, you looted cleanly
          and managed to escape with your life, now your rations runs empty and the gold weighs heavy on your back.
          You are traversing the forests of the nearby township of Hounds tooth, a town carved into the side of a mountain.
          This is the begining of a choose your own adventure path, you will make the decisions and the action you choose may
          have consequences, but first a few decisions.
        </p>
        <div className="Ui">
        <NameForm setName={setName}/>
        <br/>
        <div className="flavourText">
        Your name traveller is <br/>
        <p>
        {name}
        </p>
        </div>
        <ProfessionForm setProfession={setProfession}/>
        <br/>
        <div className="flavourText">
        you&apos;re a {profession}, a wise profession in this age
        <br/>
        </div>
        <br/>
        </div>
        
        <div className="Ui">
        <p >
          Make sure you have entered your name before saving or loading
          Failure to do so will not allow you to save your story
          Click here to create a save or Load a save
        </p>
        <button onClick={()=>{writeSaveGame(name,actualDeckUrl,profession,deckDecisions)}}>Save game</button> 
        
        <button onClick={()=>{readSaveGame(name,setDeckDecisions,setActualDeckUrl,setProfession)}}>Load previous Save</button>

        </div>
        <div>
          <p className='flavourText'>
            You come across a torn up cart, a human cry to your left disturbs your musings on whether any rations
            remain in the cart, what would you like to do?
          </p>
          <br/>
        </div>

        <div className= "Ui">
        { deckDecisions[0]=== undefined  &&
        <div>
        <button data-testid="UiTestA" onClick={()=>{HandleDecision(9,"Warrior","Wizard",1)}}>Abandon the cart to help the person in distress</button>
        <button data-testid="UiTestB" onClick={()=>{HandleDecision(7,"Rogue","Warrior",3)}}>Start to look through the cart for supplies</button>
        </div>
        }


        </div>
        
        <br/>
        <div className="choiceText">
          <div>
          {deckDecisions[0]=== 1 &&
            <CartChoice1SuccessUi/>
          }
          </div>
          <div>
          {deckDecisions[0]=== 2 &&
            <CartChoice1FailUi/>}

          </div>
          <div>
          {deckDecisions[0]=== 3 &&
            <CartChoice2SuccessUi/>
          }            
          {deckDecisions[0]=== 4 &&
            <CartChoice2FailUi/>}
          </div>

        </div>
        <br/>
       
        {(deckDecisions[0] ===1 ||  deckDecisions[0] ===2 ) &&
         <p className="flavourText">
        The cart driver having bandaged himself and found his Ox (by some miracle, the goblins are renowned for eating oxen),
         offers you a lift to town, though you expect with some ulterior motive.
        </p>}
        {(deckDecisions[0] ===3 ||  deckDecisions[0] ===4 )&&
      <p className="flavourText">
        You decide to strirke off on your own away from the mad man and the goblins. Do you take the direct route back through the forest, hopefully avoiding any travellers on 
        the road. Or take the road directly back to Hounds Tooth , possibly finding more people along the way.
      </p>}

        <div className="Ui">
      {/* <button data-testid="UiTestA" onClick={()=>{HandleDecision(9,"Warrior","Wizard",1)}}>Abandon the cart to help the person in distress</button> */}



        {deckDecisions[1]===undefined && (deckDecisions[0] ===1 ||  deckDecisions[0] ===2 )&&
        <button onClick ={()=>{HandleDecision(5,"Rogue","Warrior",1)}}>
          Ride in the back of his cart for an easy ride back to Hounds Tooth</button>}
        {deckDecisions[1]===undefined && (deckDecisions[0] ===1 ||  deckDecisions[0] ===2 )&&
        <button onClick ={()=>{HandleDecision(7,"Wizard","Rogue",3)}}>
          Strike off on your own across cutting across the wilds</button>}
        {deckDecisions[1]===undefined && (deckDecisions[0] ===3 ||  deckDecisions[0] ===4 )&&
        <button onClick ={()=>{HandleDecision(11,"Wizard","Rogue",5)}}>
          Follow the road towards Hounds Tooth</button>}
        {deckDecisions[1]===undefined && (deckDecisions[0] ===3 ||  deckDecisions[0] ===4 )&&
        <button onClick ={()=>{HandleDecision(7,"Rogue","Wizard",7)}}>
          or break off and go off the beaten path to try avoid ambushes</button>}
          
        </div>
        <div className="flavourText">
        {deckDecisions[1]===1 &&
       <Choice2aSuccessUi/>
        }
        {deckDecisions[1]===2 &&
       <Choice2aFailUi/>
        }
        {deckDecisions[1]===3 &&
       <Choice2bSuccessUi/>
        }
        {deckDecisions[1]===4 &&
       <Choice2bFailUi/>
        }
        {deckDecisions[1]===5 &&
       <Choice2cSuccessUi/>
        }
        {deckDecisions[1]===6 &&
       <Choice2cFailUi/>
        }
        {deckDecisions[1]===7 &&
       <Choice2dSuccessUi/>
        }
        {deckDecisions[1]===8 &&
       <Choice2dFailUi/>
        }
        {deckDecisions}
        </div>
      <div>
      {/* 3, 4, 5, 7, 8 */}
      {((deckDecisions[1]===3)||(deckDecisions[1]===4)||(deckDecisions[1]===5)||(deckDecisions[1]===7)||(deckDecisions[1]===8))&&
      ChapterButton("Chapter2")}
      </div>
      </body>
    </>
  );
      }

export default App
