"use strict"

const buttons = document.querySelectorAll('.show-modal')
const modalWindow = document.querySelector('.modal')
const closeButton = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')
console.log(buttons)

for(let value of buttons){
  value.addEventListener('click', ()=>{
    modalWindow.classList.remove('hidden')
    overlay.classList.remove('hidden')
  })
}

closeButton.addEventListener('click', ()=>{
  modalWindow.classList.add('hidden')
  overlay.classList.add('hidden')
})

overlay.addEventListener('click', ()=>{
  modalWindow.classList.add('hidden')
  overlay.classList.add('hidden')
})