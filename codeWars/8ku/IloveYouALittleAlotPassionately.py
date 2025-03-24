# Python Solution: Elvis and Heri Codewars
def how_much_i_love_you(nb_petals):
    #your code
    phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    
    numPhrases = len(phrases)
    
    #If the number of pedals minus 1 is greater than the number of phrases then run: 
        #numPedals - 1 % numPhrases 

    if(nb_petals - 1 > numPhrases):
        index = (nb_petals - 1) % numPhrases
        return phrases[index]
    else: 
        return phrases[(nb_petals - 1) % numPhrases]