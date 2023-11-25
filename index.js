"use strict";
let randomValue = Math.round(Math.random() * 20);
const resetButton = document.querySelector('.header__button')
const body = document.querySelector('.body')
const number = document.querySelector('.main__randomCount')
const input = document.querySelector('input')
const textHelper = document.querySelector('.lower__text')
const lower = document.querySelector('.lower__second')
let numberOfRequest = document.querySelector('.lower__numberOfRequest')
let countBestResult = document.querySelector('.lower__numberOfTry')
const audio = new Audio('audio/Mountain Audio - Menu Click.mp3')

console.log(randomValue)

resetButton.addEventListener('click', ()=>{
  body.classList.add('body')
  body.classList.remove('bodyChange')
  randomValue = Math.round(Math.random() * 20)
  number.innerHTML= '?'
  numberOfRequest.innerHTML = '20'
})



let checkButton = document.querySelector('.lower__button')
console.log(checkButton)

let numberOfTry = 0

checkButton.addEventListener('click', ()=>{
  audio.play()
  numberOfTry += 1 
  numberOfRequest.innerHTML -= 1

  let inputValue = Number(input.value)
  let bestResult = Number(countBestResult.innerHTML)

  if(inputValue === randomValue){
    console.log('hi')
    body.classList.remove('body')
    body.classList.add('bodyChange')
    number.innerHTML = `${randomValue}`
    if(numberOfTry < bestResult){
      bestResult.innerHTML = `${numberOfTry}`
    }
  }else if(inputValue >= randomValue){
    textHelper.innerHTML = 'Немного меньше'
  }else if(inputValue <= randomValue){
    textHelper.innerHTML = 'Немного больше'
  }
})
