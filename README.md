# Who wants to WIN A DOLLAR!

Quiz based game created using JAVASCRIPT. 

# Rules
* User is asked a question and given four choices of an answer.
* User increases score by increments of 10 if answer is correct.
* Counter is on the left side of the window and logs User's score.
* User recieves alert when game is complete.

# Code used to display Questions through the question list array and display them on the HTML card ('question')

var questionDisplay = document.getElementById('question')
function startGame () {
questionDisplay.innerText = questionList[counter].questions
questionList[counter].options.forEach(function (value, index){
    console.log(value, index)
     var elementId = "b" + index 
     document.getElementById(elementId).innerHTML = questionList[counter].options[index]
     }
    )


