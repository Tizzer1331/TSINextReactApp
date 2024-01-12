//Success
function Choice2dSuccessUi(){
    return(
<p data-testid="UiTest7"> 
    You strike out across the forest, sure of your sense of direction and heading for the jagged mountains that give the town of Hound&apos;s tooth its name.
         Travelling across the forest is hard work and the pack weighty with gold doesn&apos;t help at all. You forage what you can of the native flora to fill your belly,
          mushrooms and berries mostly. The night draws in and the realisation that the journey will not be over tonight.
           You start looking for shelter as you approach a clearing with a cave mouth in it. 
           You leer in, lighting one of your last few torches you enter looking for shelter and enter the cave.
</p>
    )
}
//FAILURE
function Choice2dFailUi(){
    return(
<p data-testid="UiTest8">
You strike out across the forest, sure of your sense of direction and heading for the jagged mountains that give the town of Hound&apos;s tooth its name.
 Travelling across the forest is hard work and the pack weighty with gold doesn&apos;t help at all. You forage what you can of the native flora to fill your belly, 
 mushrooms and berries mostly. The night draws in and the realisation that the journey will not be over tonight fills you with trepidation. 
 As you hurry hearing the nocturnal creatures of the forest awaken, there was tell of an Manticore in this forest.
  Breaching a clearing you breathe a sigh of relief, a cave mouth is there and will give some shelter from the creatures of the night. 
   Eating away at the distance you hear the splintering of wood and the ground gives way. Falling through you find yourself  in a mine shaft, tending to an injured leg.
</p>
    )
}

export{Choice2dSuccessUi,Choice2dFailUi}