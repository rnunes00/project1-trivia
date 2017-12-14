//Created Object for questions, options, & answers to be able to reference during functions 

class Question {
    constructor(questions, options, answer){
    this.questions = questions
    this.options = options
    this.answer = answer
    }
}

// Created an array to store my questions, choices, &answers  
var questionList = [
    new Question ("How many megabytes are there in 1 gigabyte?",["10000", "100", "1000", "100000"], "1000"),

    new Question ("What is Tiger Wood's real first name?", ["William","Eldrick", "Elgin","Charles"], "Eldrick"),

    new Question ("Who had a 1990's hit with the song 'Bump N' Grind'?", ["Usher","R Kelly","Dontell William","Prince"], "R Kelly"),

    new Question ("What year was the first iPhone released?", ["2000", "1999", "2003", "2007"], "2007"),

    new Question ("What is the name of the Earth's largest ocean?", ["Indian Ocean","Pacific Ocean", "Red Ocean", "Nile River"], "Pacific Ocean"),

    new Question ("This movie, is considered the highest grossing movie of all time (minus inflation)?", ["Titanic","Avatar","Fast and Furious","Pirates of the Caribbean"], "Avatar"),

    new Question ("What is Chandler's last name in the sitcom Friends?",["Bing","Smith","Bop","Bang"], "Bing"),

    new Question ("This African-American actor won an Academy Award for Best Actor in 2001?", ["Will Smith","James Earl Jones", "Samuel Jackson","Denzel Washington"], "Denzel Washington"),

    new Question ("Where would you find the Sea of Tranquility?", ["the Moon","Jamaica","Neptune","Puerto Rico"], "the Moon"),

    new Question ("This comedian starred in the #1 stand up box-office film of all time", ["Bernie Mac","Eddie Murphy","Charlie Murphy","Dave Chappelle", "Eddie Murphy"]
    )
]


var counter = 0 

// Created function to tally user score
function submit () {
    showScore()
    counter++ 
    if (counter === questionList.length){
        let response = alert("You've finished the game!!")        
    }
    startGame()
}
var scoreCount = 0
function showScore (){
    // counter++
// if guess = answer add 10 to score count. When counter+ 1 reaches the length of the arraylist game is over showws final score
    console.log(buttonClicked.innerText, questionList[counter].answer )
    if (buttonClicked.innerText === questionList[counter].answer) {
        // debugger
    scoreCount += 10
    console.log(scoreCount)    
    }
    // startGame()  

    document.getElementById('scorebtn').innerHTML = "Score:" + scoreCount
}

// Created variable for submit button that links button in HTML & added listener to button
const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', submit)

// Created event listeners for option buttons 
var buttonClicked = null 
document.getElementById('but0').addEventListener('click', function (){
    buttonClicked = document.getElementById('but0')
})
document.getElementById('but1').addEventListener('click', function (){
    buttonClicked = document.getElementById('but1')
})
document.getElementById('but2').addEventListener('click', function (){
    buttonClicked = document.getElementById('but2')
})
document.getElementById('but3').addEventListener('click', function (){
    buttonClicked = document.getElementById('but3')
})

var questionDisplay = document.getElementById('question')
function startGame () {
questionDisplay.innerText = questionList[counter].questions
questionList[counter].options.forEach(function (value, index){
    console.log(value, index)
     var elementId = "b" + index 
     document.getElementById(elementId).innerHTML = questionList[counter].options[index]
     }
    )
}
    
startGame()
 

    
