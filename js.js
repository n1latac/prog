"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)

*/

const boxes = document.querySelectorAll('.boxes__box')

for(let value of boxes){
  value.addEventListener('click', ()=>{
    if(value.previousElementSibling){
        value.classList[1].split('_')[1] < value.previousElementSibling.classList[1].split('_')[1] && value.previousElementSibling.before(value)
    }
  })
    
}