//SUCCESS
function Choice2aSuccessUi(){
    return(
    <p data-testid="UiTest1">
    You pull yourself up into the cart , moving aside some supplies and you settle your weary head,
    slinging your pack onto the cart with the jingle of gold and a few coins falling out. 
    it &apos;s been a long journey already and a nice easy trip to Hounds Tooth would be a welcome reward for a hard day, 
    you start to drift off thinking of the bonus the Boyar will pay you for the removal of the Wights from the cemetery in that damnable Mire.
    You awake with a start something fallen across your lap, it&apos;s dark and the cart has stopped for the night, the Cart owner is rifling through your pack! 
    You shout at him to stop he drops it and apologises 
    &lsquo;I&apos;m sorry just after the goblins some of my supplies are gone and repairs on the cart alone is more than what&apos;s left&rsquo;
    He backs away hands in the air apologising profusely. You leap off the cart collecting your pack and  the sword that fell across you and bid him a disgruntled goodbye.
    Where now? you think to yourself
    </p>
    )
    }
    //Failure
    function Choice2aFailUi(){
    return(
    <p data-testid="UiTest2">
    You pull yourself up into the cart , moving aside some supplies and you settle your weary head, 
    slinging the pack onto the cart with the jingle of gold and a few coins falling out. 
    it&apos;s been a long journey already and a nice easy trip to Hounds Tooth would be a welcome reward for a hard day, 
    you start to drift off thinking of the bonus the Boyar will pay you for the removal of the Wights from the cemetery in that damnable Mire.
    Tou awaken from your slumber with the tittering of the night chorus, perched against a tree you have no memory of, l
    ooking around all that remains of the cart and the driver is a set of divots in the road as you collect your belongings. 
    The pack that was laden with gold feels lighter now as you lift it , as it&apos;s checked the cart owner has obviously helped himself to  your gold.
    You realise it&apos;s a bad place to stay and work out which way to head to get to safety or Town.
    </p>
    )
    }
    export{Choice2aFailUi,Choice2aSuccessUi}