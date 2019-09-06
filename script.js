'use strict'

const div = document.querySelector('div')
const input = document.querySelectorAll('input')[0]
const btn = document.querySelectorAll('input')[1]
const para = document.createElement('p')

// Function to check age
function ageControl() {
    let age = input.value
    
    if(age <= 18){
        input.value = ""
        return 'För ung' 
    } 
    else if (age >18 && age <= 65) {
        input.value = ""
        return 'Precis rätt!'
    }
    else {
        input.value = ""
        return 'För gammal'
    }
}


// Function to display result on html
function result() {
    const age = ageControl()
    const text = document.createTextNode(age)

    if(!document.body.contains(para)){
        div.appendChild(para)
        para.appendChild(text)
    } else {
        para.textContent = age
    }
}

// Events
btn.addEventListener('click', function(){
    if(input.value.length > 0){
        result()
    } else {
        alert('Ange hur gammal du är!')
    }
})

input.addEventListener('keypress', function(event){
    if(input.value.length > 0 && event.keyCode == 13){
        result()
    }
})

input.addEventListener('focus', function(){
    para.textContent = ""
})