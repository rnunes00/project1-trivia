function Question (question, options, answer) {
    this.question = question
    this.options = options
    this.answer = answer
}

// add a counter for the question to get out of the array below
    // increment that counter when user gets and answer/right or wrong
// actual display of the question
   // use the counter to get a ? out of the array below
   // iterate over the array of options in the object
      // cue a for-loop or .forEach on whateverQuestion.options
        // in the for loop, write each option to each button */

// var q1 = {
//     question: "What island does the artist hail Rihanna from?",
//     options: ["Jamaica", "Bahamas","U.S. Virgin Islands","Barbados"],
//     answer: "Barbados"
// }
//     q2 = {
//     question: "What island does the artist hail Rihanna from?",
//     options: ["Jamaica", "Bahamas","U.S. Virgin Islands","Barbados"],
//     answer: "Barbados"
//     }
var questionList = [
    new Question ("How many megabytes are there in 1 gigabyte?",[10000, 100, 1000, 100000], 1000),

    new Question ("What is Tiger Wood's real first name?", ["William","Eldrick", "Elgin","Charles"], "Eldrick"),

    new Question ("Who had a 1990's hit with the song 'Bump N' Grind'?", ["Usher","R Kelly","Dontell William","Prince"], "R Kelly"),

    new Question ("What year was the first iPhone released?", [2000, 1999, 2003, 2007], 2007),

    new Question ("What is the name of the Earth's largest ocean?", ["Indian Ocean","Pacific Ocean", "Red Ocean", "Nile River"], "Pacific Ocean"),

    new Question ("This movie, is considered the highest grossing movie of all time (minus inflation)?", ["Titanic","Avatar","Fast and Furious","Pirates of the Caribbean"], "Avatar"),

    new Question ("What is Chandler's last name in the sitcom Friends?",["Bing","Smith","Bop","Bang"], "Bing"),

    new Question ("This African-American actor won an Academy Award for Best Actor in 2001?", ["Will Smith","James Earl Jones", "Samuel Jackson","Denzel Washington"], "Denzel Washington"),

    new Question ("Where would you find the Sea of Tranquility?", ["the Moon","Jamaica","Neptune","Puerto Rico"], "the Moon"),
]

var questionCardEl = document.getElementById('question')
questionCardEl.innerHTML = questionList[0].question

questionList[0].options.forEach(function (value, index){
   // console.log(value, index)
    var elementId = "b" + index 
    document.getElementById(elementId).innerHTML = questionList[0].options[index]
    if (questionList[0].options[index] === questionList[0].answer );
    }
)





// function questionAnswered {
    // for (let i = 0; i < questionList[0].options.length; i++) ;
    

// }

// .innerHTML = questions.question;
//document.getElementById('options').innerHTML=questions[0].options,

//  <button onclick="myFunction(grab)">Submit</button>

