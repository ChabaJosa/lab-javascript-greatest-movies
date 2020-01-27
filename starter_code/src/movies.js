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

const dramaMoviesRate = arr => {

  let dramas = arr.filter(i =>  i.genre.includes('Drama'))
  let count = 0
  if(dramas.length === 0) return 0;
  let rates = dramas.forEach(i =>i.rate ? count += i.rate:count += 0)

  return Number((count/dramas.length).toFixed(2))

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => {

  let finalArr = [...arr]
  let newArray = []
  let numArray = []

  for (i in arr){
    newArray.push(arr[i].duration)
  }

  for (i in newArray){
    if (newArray[i].length>=8){
      numArray.push((Number(newArray[i][0])*60)+(Number(newArray[i].slice(3,5))))
    } else if (newArray[i].includes("mi")){
      numArray.push(parseInt(newArray[i].slice(0,4)))
    } else {
      numArray.push(parseInt(newArray[i])*60)
    }
  }

 // Until here numArray has all the minutes of movies

  // for (i in finalArr){ 
  //   finalArr[i].duration = numArray[i]
  // }

  // This doesn't work because each pointer that references each object in the original array are still pointing to these objects in the copy. So if you call the function like this it would change the oiriginal array.

  for (i in finalArr){
    finalArr[i] = {...finalArr[i], duration: numArray[i]};
  }

  return finalArr

}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
