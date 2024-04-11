function CartChoice1SuccessUi(){

    return(
<p data-testid="UiTestCartA">
    You head into the forest, pushing through the branches following the cries of distress, as you breach into a clearing you see owner of the cart lying against a tree stump
    trying to fend off a couple of Forest Goblins. You handily dispatch them and as you give a hand to the cart owner he speaks &lsquo;Thank you friend, I was doomed there&rsquo; he winces slighty
    as he stands a sword wound in his side, &lsquo;Oh this? I&apos;ll live now, I&apos;ve got some supplies on the cart&rsquo;. As you wander back he hands you some food after bandaging himself.
</p>
)
}
function CartChoice1FailUi(){

    return(
<p data-testid="UiTestCartB">
    You rush through the forest, cutting yourself on brambles and branches rushing to the sound of voices and screaming as fast as you can. You finally breach into a clearing 
    out of breath, just as a group of Forest Goblins finish killing who you can only presume is the cart owner. They turn to you , sneers of malicious glee playing across their
    f.aces. You turn to run, but they fall upon you so you turn to fight. It&apos;s a hard fight but you dispatch them, you head back to the cart tired and worn and see what you can use
    but the cart has been ransacked fully; nothing has been left bar a few rotten hunks of bread.
</p>

    )

}
function CartChoice2SuccessUi(){

    return(
<p>
    You start to look through the cart and it&apos;s suspiciously full. Surely someone would of seen this by now and torn it apart if nothing else a wild animal should of
    you then become very aware that you&apos;re being watched from the forest. Slyly you loosen your sword from it&apos;s scabbard and as the watchers pounce you draw your sword in one 
    fluid motion and kill the forest goblin mid air, it&apos;s poisoned spear quivering in the cart beside you. Another leaps and is dispatched effortlessly, with that the others titter
    and screech back into the forest leaving you to collect what goods you can without any more distractions
</p>
    )

}
function CartChoice2FailUi(){

    return(
<p>
    As you begin to search through the goods a man bursts through the trees, &lsquo;GET AWAY YOU BRIGAND&rsquo;. The man is dirty and unkempt, like he&apos;s been living in the forest for weeks.
    He&apos;s wielding an old stick roughly fashioned into a club a spoke from the wheel driven through it sharpened to a point. He&apos;s obvioulsy a mad man, you take one last look at the carts 
    goods and realise it&apos;s rotten and unwilling to kill this man you leave into the forest hoping to find better luck elsewhere.
</p>
    )

}


export {CartChoice1SuccessUi}
export {CartChoice1FailUi}
export {CartChoice2SuccessUi}
export {CartChoice2FailUi}