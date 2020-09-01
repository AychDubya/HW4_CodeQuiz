var jumbotron = document.querySelector(".jumbotron")
var container = document.querySelector(".container")
var startBtn = document.querySelector(".startBtn")
var questionH1 = document.querySelector(".question")
var ansDiv = document.querySelector(".answers")
var timeHere = document.querySelector(".timerHere")
var initilasDiv = document.querySelector(".initialsDiv")
var initialsBtn = document.querySelector(".initilasBtn")
var myIndex = 0
var secs = 30
var correct=0
var unCorrect= 0

var questionsArray = [
    {
        question: "What year is it?",
        answers: ["1999", "1796", "2020"],
        correctAnswer: "2020"
    },
    {
        question: "Which release first?",
        answers: ["Starcraft", "Warcraft 2", "Command & Conquer"],
        correctAnswer: "Command and Conquer"
    },
    {
        question: "Which color is best??",
        answers: ["red", "blue", "green", "salmon"],
        correctAnswer: "salmon"
    }
]




container.style.display = "none"
initilasDiv.style.display = "none"

startBtn.addEventListener("click", function () {
    jumbotron.style.display = "none"
    container.style.display = "block"
    
    printQuestions()
    $(document).ready(function(){
         var id = setInterval(function(){ 
            secs--; 
            timeHere.textContent = secs
          if(secs<= 0 ){
            clearInterval(id);
            ansDiv.style.display="none"
            alert('Total Time: ' + secs + ' seconds');
           }
           console.log(myIndex);
            if (myIndex > 2 ){
            clearInterval(id);
            container.style.display="block"
            alert('Total Time: ' + secs + ' seconds');
           }
           
        }, 1000);
        });

})


function printQuestions() {
    questionH1.textContent = questionsArray[myIndex].question

    for (var i = 0; i < questionsArray[myIndex].answers.length; i++) {

        var option1 = document.createElement("button")
        option1.setAttribute("class", "col-12 btn btn-primary")
        option1.textContent = questionsArray[myIndex].answers[i]
        ansDiv.appendChild(option1)
    }

}


ansDiv.addEventListener("click",function(event){
    console.log(event.target.textContent);
    var answerClicked = event.target.textContent
    if(answerClicked === questionsArray[myIndex].correctAnswer){
        correct++
        console.log( "correct answers "+correct);
        
    }else{
        
       
        unCorrect++
        console.log("Wrong answers "+unCorrect);
        
    }
    ansDiv.textContent=""

    myIndex++
    if(myIndex < questionsArray.length  ){

        printQuestions()
    }else{
        ansDiv.style.display="none"
    }
    
})