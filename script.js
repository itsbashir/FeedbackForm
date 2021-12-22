const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) =>{
    if (e.target.parentNode.classList.contains
        ('rating')){
        removeActiveClasses()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
        // console.log(selectedRating)
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class='fas fa-heart' ></i>
    <strong>Thank you!</strong>
    <br>
    <strong> Feedback: ${selectedRating} </strong>
    <p>We'll use your feedback to improve our service!</p>
    
    `
})

function removeActiveClasses(){
    ratings.forEach((rating)=>{
        rating.classList.remove('active')
    })
}


/*
// remove active class using for loop instead of forEach 
function removeActive(){
    for (let i=0; i< ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}

ratings.forEach(rating => {
    rating.addEventListener('click',() =>{
        removeActiveClasses( )
        rating.classList.add('active')
    })
})

// event bubbling propagation on each element clicked on!
panel.addEventListener('click', (e) => {
    console.log(e.target)
})
// This parentNode will target on images only not outside it
panel.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains
        ('rating'))
            console.log(e.target)
})

*/