/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = arr => {
    return arr.concat().sort((a,b) => {
        return a.year - b.year  ||  a.title.localeCompare(b.title);
    });
};
    
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = arr => {
    let newArr = [...arr]
    let objs = newArr.filter(i => i.director == "Steven Spielberg" && i.genre.includes("Drama") == 1)
    // returns array of the objects you need
    let count = 0
    for (i in objs){
      count += 1
    }
    return count 
  }

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


const orderAlphabetically = arr =>{

    let newArr = [...arr]
    let objs = newArr.sort( (a,b) => {return a.title.localeCompare(b.title)})
    // gives you sorted objs
    let result = []
    for (i in objs){
      result.push(objs[i].title)
    }
    console.log(result.length)
    if (result.length >= 20){
      return result.slice(0,20)
    } else {
      return result
    }
  
  }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arr => {

    let array = [...arr]
  
    let newArr = array.filter(i => { 
      if(i.rate){
        return i
      } 
      else {
        i.rate = 0;
        return i
      } 
    })
    
    if (newArr.length!=0){
  
    let rates = []
    for (i in newArr){
      rates.push(newArr[i].rate)
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let n = (rates.reduce(reducer)/rates.length).toFixed(2)
  
    return Number(n)
  
    } else {
      return 0
    }
    
  
  }

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
