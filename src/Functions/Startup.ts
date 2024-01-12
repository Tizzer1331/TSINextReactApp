

async function StartUp(setActualDeckUrl){
    const res = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
if (!res.ok){
  throw new Error ('Failed to collect Deck')
}
const deckData= await res.json()
console.log("DATA STUFF "+ deckData.deck_id)
setActualDeckUrl("https://www.deckofcardsapi.com/api/deck/" + deckData.deck_id + "/draw/?count=1")
console.log(deckData)
}

export {StartUp}