import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
const maxTime:number = 300*1000
const timerText: HTMLSpanElement = document.querySelector("#timer") as HTMLSpanElement
const question: HTMLParagraphElement = document.querySelector("#question") as HTMLParagraphElement // Question element type <p>

// answers checkboxs elements
const answer1:HTMLInputElement = document.querySelector("#ans1") as HTMLInputElement
const answer2:HTMLInputElement = document.querySelector("#ans2") as HTMLInputElement
const answer3:HTMLInputElement = document.querySelector("#ans3") as HTMLInputElement
const answer4:HTMLInputElement = document.querySelector("#ans4") as HTMLInputElement

// Answers text elements
const answer1Text:HTMLInputElement = document.querySelector("#ans1Text") as HTMLInputElement
const answer2Text:HTMLInputElement = document.querySelector("#ans2Text") as HTMLInputElement
const answer3Text:HTMLInputElement = document.querySelector("#ans3Text") as HTMLInputElement
const answer4Text:HTMLInputElement = document.querySelector("#ans4Text") as HTMLInputElement

// Ui Elements
const timeOverMessage:HTMLDivElement = document.querySelector("#timeOver") as HTMLDivElement
// Game Win
const GameWinMessage:HTMLDivElement = document.querySelector("#gameWin") as HTMLDivElement
// steps menu
const stepsMenu:HTMLUListElement = document.querySelector("#progress-list ul") as HTMLUListElement
let results:boolean[] = []

// Controlers buttons
const next:HTMLButtonElement = document.querySelector("#next")
const back:HTMLButtonElement = document.querySelector("#back")
// Time Manager
let timer:number = 0
const timeClock = setInterval(()=>{
    if(timer < maxTime){
        timer += 1000 // 1000 => 1s
        timerText.innerText = (getReadableTimer(maxTime-timer))
    }else{
        clearInterval(timeClock)
        timeOverMessage.style.transform = "translatex(0%)"
    }
}, 1000)

// Get Time as readble by minutes & seconds
function getReadableTimer(timer:number):string {
    let minutes:number = Math.floor(timer / 60000)
    let seconds:number = (((timer % 60000) / 1000).toFixed(0) as unknown) as number
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
}

interface Quiz{title:string,choices:string[],answer:boolean[]}
// Questions 
const questionList:Quiz[] = [
    {
        title:"What does HTML stand for?",
        choices:["Hyperlinks and Text Markup Language","Hyper Text Markup Language","Home Tool Markup Language","Styling markup language"],
        answer:[false,true,false,false]
    },
    {
        title:"Choose the correct HTML tag for the largest heading",
        choices:["<heading>","<h6>","<head>","<h1>"],
        answer:[false,false,false,true]
    },
    {
        title:"What is the correct HTML tag for inserting a line break?",
        choices:["<br>","<lb>","<break>","</new-break>"],
        answer:[true,false,false,false]
    },
    {
        title:"What is the correct HTML for creating a hyperlink?",
        choices:["<a url=\"http://www.w3schools.com\" >W3Schools.com</a> ","<a name=\"http://www.w3schools.com\" >W3Schools.com</a>","<a href=\"http://www.w3schools.com\" >W3Schools</a>","<a>http://www.w3schools.com</a>"],
        answer:[false,false,true,false]},
    {
        title:"Which of these tags are all <table> tags?",
        choices:["<table><head><tfoot>","<table><tr><td>","<thead><body><tr>","<table><tr><tt>"],
        answer:[false,true,false,false]
    },
    {
        title:"What is the correct HTML for inserting an image?",
        choices:["<img alt=\"MyImage\">image.gif</img>","<img src=\"image.gif\" alt=\"MyImage\">","<image src=\"image.gif\" alt=\"MyImage\">","<img href=\"image.gif\" alt=\"MyImage\">"],
        answer:[false,true,false,false]
    },
    {
        title:"How can you make a numbered list?",
        choices:["<ol>","<ul>","<dl>","<list>"],
        answer:[true,false,false,false]
    },
    {
        title:"What is the correct HTML for making a checkbox?",
        choices:["<checkbox>","<input type=\"checkbox\">","<check>","<input type=\"check\">"],
        answer:[false,true,false,false]
    },
    {
        title:"What does CSS stand for?",
        choices:["Creative Style Sheets","Cascading Style Sheets","Computer Style Sheets","Colorful Style Sheets"],
        answer:[false,true,false,false]
    },
    {
        title:"What is the correct HTML for referring to an external style sheet?",
        choices:["<stylesheet>mystyle.css</stylesheet>","<style src=\"mystyle.css\">","<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">","<css src=\"mystyle.css\">"],
        answer:[false,false,true,false]
    },
    {
        title:"Which is the correct CSS syntax?",
        choices:["body {color: black;}","{body:color=black;}","body:color=black;","{body;color:black;}"],
        answer:[true,false,false,false]
    },
    {
        title:"Which property is used to change the background color?",
        choices:["color","background-color","bgcolor","fill-color"],
        answer:[false,true,false,false]
    },
    {
        title:"How do you add a background color for all <h1> elements?",
        choices:["h1 {background-color:#FFFFFF;}","h1.all {background-color:#FFFFFF;}","all.h1 {background-color:#FFFFFF;}","h1.any {background-color:#FFFFFF;}"],
        answer:[true,false,false,false]
    },
    {
        title:"Which property is used to change the left margin of an element?",
        choices:["padding-left","margin-left","indent","left"],
        answer:[false,true,false,false]
    },
    {
        title:"Which sign does jQuery use as a shortcut for jQuery?",
        choices:["the ? sign","the # sign","the $ sign","the jQuery"],
        answer:[false,false,true,false]
    },
    {
        title:"With jQuery, look at the following selector: $(\"div\"). What does it select?",
        choices:["All div elements","The first div element","any element has a class div","any element has an id div"],
        answer:[true,false,false,false]
    }
]

let activeQuestion:number = 1

function getQuestion():boolean {
    if(activeQuestion <= questionList.length){
        question.innerText = questionList[activeQuestion-1].title
        answer1Text.innerText = questionList[activeQuestion-1].choices[0]
        answer2Text.innerText = questionList[activeQuestion-1].choices[1]
        answer3Text.innerText = questionList[activeQuestion-1].choices[2]
        answer4Text.innerText = questionList[activeQuestion-1].choices[3]
        document.querySelector(".progress-list ul li:nth-child("+(activeQuestion)+")").classList.add('active')
        return true
    }else{
        return false
    }
}



function checkUserAnswers():boolean{
    let response:boolean =  answer1.checked == questionList[activeQuestion-1].answer[0] && answer2.checked == questionList[activeQuestion-1].answer[1] && answer3.checked == questionList[activeQuestion-1].answer[2] && answer4.checked == questionList[activeQuestion-1].answer[3]
    clearChoices()
    return response
}

next.addEventListener("click",function():void{
    saveUserAnswer(checkUserAnswers())
})

function saveUserAnswer(result:boolean):void{
    results[activeQuestion-1] = result
    activeQuestion++
    if(!getQuestion())
    getUserReult()
    updateLevels()
}

function getUserReult():void{
    let points:number = results.filter((el):boolean=>{return el == true}).length*20
    let score  = (points/(questionList.length*20))*100
    GameWinMessage.querySelector("p #finalScore").innerHTML = Math.ceil(score) as unknown as string 
    GameWinMessage.style.transform = "translatex(0%)"
    
}

function clearChoices():void{
    answer1.checked = false
    answer2.checked = false
    answer3.checked = false
    answer4.checked = false
}


function setQuizzStepsList():void{
    let stepsCount:number = questionList.length
    for(let i = 0;i<stepsCount;i++){
        let li:HTMLLIElement = document.createElement('li') as HTMLLIElement
        li.innerText = (i+1) as unknown as string;
        if(i == 0){
            li.classList.add('active')
        }
        stepsMenu.append(li)
    }
}
setQuizzStepsList()
getQuestion()

function updateLevels():void{
    let levelSize = Math.ceil(questionList.length/3)
    if(results.length < levelSize)
        document.querySelector("#level1").classList.add('active')
    if(levelSize < results.length && results.length < levelSize*2)
        document.querySelector("#level2").classList.add('active')
    if(levelSize < results.length)
        document.querySelector("#level3").classList.add('active')
}