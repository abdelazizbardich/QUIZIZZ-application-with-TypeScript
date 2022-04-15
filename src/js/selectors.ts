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
// Controlers buttons
const next:HTMLButtonElement = document.querySelector("#next")
const back:HTMLButtonElement = document.querySelector("#back")
const stepsMenu:HTMLUListElement = document.querySelector("#progress-list ul") as HTMLUListElement

const levles:HTMLDivElement[] = [document.getElementById("level1") as HTMLDivElement,document.getElementById("level2") as HTMLDivElement,document.getElementById("level3") as HTMLDivElement]


export default {
    timerText,
    question,
    answer1,
    answer2,
    answer3,
    answer4,
    answer1Text,
    answer2Text,
    answer3Text,
    answer4Text,
    timeOverMessage,
    GameWinMessage,
    next,
    back,
    stepsMenu,
    levles
}