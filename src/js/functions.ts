import selectors from "./selectors"
// Time Manager
const timeManager = (maxTime)=>{
    let timer:number = 0
    const timeClock = setInterval(()=>{
        if(timer < maxTime){
            timer += 1000 // 1000 => 1s
            selectors.timerText.innerText = (getReadableTimer(maxTime-timer))
        }else{
            clearInterval(timeClock)
            selectors.timeOverMessage.style.transform = "translatex(0%)"
        }
    }, 1000)
}

// Get Time as readble by minutes & seconds
const getReadableTimer = (timer:number):string => {
let minutes:number = Math.floor(timer / 60000)
let seconds:number = (((timer % 60000) / 1000).toFixed(0) as unknown) as number
return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
}

const getQuestion = (activeQuestion:number,activeLevel:number,questionList):void =>{
        selectors.question.innerText = questionList[activeLevel].questions[activeQuestion].title
        selectors.answer1Text.innerText = questionList[activeLevel].questions[activeQuestion].choices[0]
        selectors.answer2Text.innerText = questionList[activeLevel].questions[activeQuestion].choices[1]
        selectors.answer3Text.innerText = questionList[activeLevel].questions[activeQuestion].choices[2]
        selectors.answer4Text.innerText = questionList[activeLevel].questions[activeQuestion].choices[3]
        document.querySelector(".progress-list ul li:nth-child("+(activeQuestion+1)+")").classList.add('active')
}

// const checkUserAnswers = ():boolean => {
//     let response:boolean =  answer1.checked == questionList[activeQuestion-1].answer[0] && answer2.checked == questionList[activeQuestion-1].answer[1] && answer3.checked == questionList[activeQuestion-1].answer[2] && answer4.checked == questionList[activeQuestion-1].answer[3]
//     clearChoices()
//     return response
// }

const getUserAnswers = ():boolean[]=>{
    return [selectors.answer1.checked,selectors.answer2.checked,selectors.answer3.checked,selectors.answer4.checked]
}

// vefiry answers are correct or not
const verifyAnswers = (answers,correctAnswers):boolean=>{
    return answers[0] == correctAnswers[0] && answers[1] == correctAnswers[1] && answers[2] == correctAnswers[2] && answers[3] == correctAnswers[3]
}

const saveUserAnswer = (activeLevel,activeQuestion,result:boolean,results:boolean[][]):boolean[][] => {
    results[activeLevel][activeQuestion] = result
    // reset all checkboxes input for next question
    clearChoices()
    return results
}

// const getUserReult = ():void=>{
//     let points:number = results.filter((el):boolean=>{return el == true}).length*20
//     let score  = (points/(questionList.length*20))*100
//     GameWinMessage.querySelector("p #finalScore").innerHTML = Math.ceil(score) as unknown as string 
//     GameWinMessage.style.transform = "translatex(0%)"
// }

const clearChoices = ():void =>{
    selectors.answer1.checked = false
    selectors.answer2.checked = false
    selectors.answer3.checked = false
    selectors.answer4.checked = false
}


const setQuizzStepsList = (activeLevel,questionsData):void=>{
    let stepsCount:number = questionsData[activeLevel].questions.length
    for(let i = 0;i<stepsCount;i++){
        let li:HTMLLIElement = document.createElement('li') as HTMLLIElement
        li.innerText = (i+1) as unknown as string;
        if(i == 0){
            li.classList.add('active')
        }
        selectors.stepsMenu.append(li)
    }    
}

const nextLevel = (activeLevel,questionsData)=>{
    console.log(questionsData[activeLevel]);
    selectors.levles[activeLevel].classList.add('active')
}


// const updateLevels = ():void=>{
//     let levelSize = Math.ceil(questionList.length/3)
//     if(results.length < levelSize)
//         document.querySelector("#level1").classList.add('active')
//     if(levelSize < results.length && results.length < levelSize*2)
//         document.querySelector("#level2").classList.add('active')
//     if(levelSize < results.length)
//         document.querySelector("#level3").classList.add('active')
// }

export default {timeManager,getQuestion,getUserAnswers,verifyAnswers,saveUserAnswer,setQuizzStepsList,nextLevel}