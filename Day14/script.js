// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

function score(dice) {
    // Fill me in!
    let points = 0
    const numberOf1 = dice.filter(el => el === 1).length
    const numberOf2 = dice.filter(el => el === 2).length
    const numberOf3 = dice.filter(el => el === 3).length
    const numberOf4 = dice.filter(el => el === 4).length
    const numberOf5 = dice.filter(el => el === 5).length 
    const numberOf6 = dice.filter(el => el === 6).length
    
    points += (Math.floor(numberOf1 / 3 ))*1000
    
    points += (Math.floor(numberOf6 / 3 ))*600
    
    points += (Math.floor(numberOf5 / 3 ))*500
    
    points += (Math.floor(numberOf4 / 3 ))*400
    
    points += (Math.floor(numberOf3 / 3 ))*300
    
    points += (Math.floor(numberOf2 / 3 ))*200
    
    points += numberOf1 % 3 * 100
    
    points += numberOf5 % 3 * 50
    
  
    
    return points
  }