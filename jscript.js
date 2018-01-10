// Rindy your code is nice and clean overall! Below I've suggested some improvements you can make.

//Created Object for questions, options, & answers to be able to reference during functions

var counter = 0
var buttonClicked = null
var scoreCount = 0

class Question { // nice use of an es6 class!
    constructor (questions, options, answer) {
        this.questions = questions
        this.options = options
        this.answer = answer
    }
}

// Created an array to store my questions, choices, &answers  
var questionList = [
    new Question("How many megabytes are there in 1 gigabyte?", ["10000", "100", "1000", "100000"], "1000"),
    new Question("What is Tiger Wood's real first name?", ["William", "Eldrick", "Elgin", "Charles"], "Eldrick"),
    new Question("Who had a 1990's hit with the song 'Bump N' Grind'?", ["Usher", "R Kelly", "Dontell William", "Prince"], "R Kelly"),
    new Question("What year was the first iPhone released?", ["2000", "1999", "2003", "2007"], "2007"),
    new Question("What is the name of the Earth's largest ocean?", ["Indian Ocean", "Pacific Ocean", "Red Ocean", "Nile River"], "Pacific Ocean"),
    new Question("This movie, is considered the highest grossing movie of all time (minus inflation)?", ["Titanic", "Avatar", "Fast and Furious", "Pirates of the Caribbean"], "Avatar"),
    new Question("What is Chandler's last name in the sitcom Friends?", ["Bing", "Smith", "Bop", "Bang"], "Bing"),
    new Question("This African-American actor won an Academy Award for Best Actor in 2001?", ["Will Smith", "James Earl Jones", "Samuel Jackson", "Denzel Washington"], "Denzel Washington"),
    new Question("Where would you find the Sea of Tranquility?", ["the Moon", "Jamaica", "Neptune", "Puerto Rico"], "the Moon"),
    new Question("This comedian starred in the #1 stand up box-office film of all time", ["Bernie Mac", "Eddie Murphy", "Charlie Murphy", "Dave Chappelle", "Eddie Murphy"])
]

// Created function to tally user score
function submit() {
    showScore()
    counter++
    if (counter === questionList.length) {
        let response = alert("You've finished the game!!") // don't need variable `response`; alert returns undefined
        // could also prompt the user if they want to play again and reset 
    }
    startGame()
}

function showScore() {
    // if guess = answer add 10 to score count. When counter+ 1 reaches the length of the arraylist game is over shows final score

    // You may want to show the score as the user answers
    console.log(buttonClicked.innerText, questionList[counter].answer)
    if (buttonClicked.innerText === questionList[counter].answer) {
        scoreCount += 10
        console.log(scoreCount)
    } // add an else here to show feedback for providing the wrong answer

    document.getElementById('scorebtn').innerHTML = "Score:" + scoreCount
}

// Created variable for submit button that links button in HTML & added listener to button
// const is awesome to use for non-changing values
const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', submit)

// Created event listeners for option buttons 

// Can refactor the code below this comment to the above
// [...document.getElementsByTagName('button')].forEach(button => {
//   button.addEventListener('click', e => buttonClicked = e.target.getAttribute('id'))
// })

document.getElementById('but0').addEventListener('click', function () {
    buttonClicked = document.getElementById('but0')
})

document.getElementById('but1').addEventListener('click', function () {
    buttonClicked = document.getElementById('but1')
})

document.getElementById('but2').addEventListener('click', function () {
    buttonClicked = document.getElementById('but2')
})

document.getElementById('but3').addEventListener('click', function () {
    buttonClicked = document.getElementById('but3')
})

var questionDisplay = document.getElementById('question')

function startGame() {
    questionDisplay.innerText = questionList[counter].questions
    questionList[counter].options.forEach(function (value, index) {
        console.log(value, index)
        var elementId = "b" + index
        // I think you can just use your button IDs here and dont need the internal spans, unless it is for a specific styling/animation reason
        // I mentioned this on the HTML side as well.

        // Your button ID names also use 0-based indexes
        document.getElementById(elementId).innerHTML = questionList[counter].options[index]
    })
}

startGame()
