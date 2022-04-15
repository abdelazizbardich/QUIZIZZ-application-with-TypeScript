import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import functions from "./functions"
import selectors from "./selectors"
import data from './database'
const maxTime:number = 300*1000

let results:boolean[][] = [[]]
const questionsData = JSON.parse(data);
let activeQuestion:number = 0
let activeLevel:number = 0
// Start timer
functions.timeManager(maxTime)
// Show question steps
functions.setQuizzStepsList(activeLevel,questionsData)
// get first question
functions.getQuestion(activeQuestion,activeLevel,questionsData)
// handle user submition
selectors.next.addEventListener("click",function():void{
    if(activeLevel < questionsData.length && activeQuestion < questionsData[activeLevel].questions.length){
        const userAnswers = functions.getUserAnswers()
        const answerCorrect = functions.verifyAnswers(userAnswers,questionsData[activeLevel].questions[activeQuestion].answer)    
        results = functions.saveUserAnswer(activeLevel,activeQuestion,answerCorrect,results);
        activeQuestion++
        functions.getQuestion(activeQuestion,activeLevel,questionsData)
    }
    else if(activeLevel < questionsData.length){
        results.push([])
        selectors.stepsMenu.innerHTML = null
        activeQuestion = 0
        activeLevel++
        functions.nextLevel(activeLevel,questionsData)
    }else{
        alert("end")
    }
})


// setQuizzStepsList()
// getQuestion()
