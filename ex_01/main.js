let greeting = document.querySelector('greeting');
greeting.textContent = "Goodbye"

const greeting = document.querySelector('.greeting')

const listItem = document.createElement('li')

listItem.classList.add('list-item');

listItem.textContent = 'Monday'

greeting.appendChild(listItem)

console.log(greeting)

/*
//global
let noun = 'cat';
let verb = 'run';
let adjective = 'happily';

function generatePoem(){
    console.log(`My ${noun} leaps ${adjective} when I ${verb} a rainbow in th rain`)
}

generatePoem()