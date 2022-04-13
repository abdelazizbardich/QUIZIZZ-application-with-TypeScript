var maxTime = 300 * 1000;
var timerText = document.querySelector("#timer");
var question = document.querySelector("#question"); // Question element type <p>
// answers checkboxs elements
var answer1 = document.querySelector("#ans1");
var answer2 = document.querySelector("#ans2");
var answer3 = document.querySelector("#ans3");
var answer4 = document.querySelector("#ans4");
// Answers text elements
var answer1Text = document.querySelector("#ans1Text");
var answer2Text = document.querySelector("#ans2Text");
var answer3Text = document.querySelector("#ans3Text");
var answer4Text = document.querySelector("#ans4Text");
// Ui Elements
var timeOverMessage = document.querySelector("#timeOver");
// Game Win
var GameWinMessage = document.querySelector("#gameWin");
// steps menu
var stepsMenu = document.querySelector("#progress-list ul");
var results = [];
// Controlers buttons
var next = document.querySelector("#next");
var back = document.querySelector("#back");
// Time Manager
var timer = 0;
var timeClock = setInterval(function () {
    if (timer < maxTime) {
        timer += 1000; // 1000 => 1s
        timerText.innerText = (getReadableTimer(maxTime - timer));
    }
    else {
        clearInterval(timeClock);
        timeOverMessage.style.transform = "translatex(0%)";
    }
}, 1000);
// Get Time as readble by minutes & seconds
function getReadableTimer(timer) {
    var minutes = Math.floor(timer / 60000);
    var seconds = ((timer % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
// Questions 
var questionList = [
    {
        title: "What does HTML stand for?",
        choices: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Styling markup language"],
        answer: [false, true, false, false]
    },
    {
        title: "Choose the correct HTML tag for the largest heading",
        choices: ["<heading>", "<h6>", "<head>", "<h1>"],
        answer: [false, false, false, true]
    },
    {
        title: "What is the correct HTML tag for inserting a line break?",
        choices: ["<br>", "<lb>", "<break>", "</new-break>"],
        answer: [true, false, false, false]
    },
    {
        title: "What is the correct HTML for creating a hyperlink?",
        choices: ["<a url=\"http://www.w3schools.com\" >W3Schools.com</a> ", "<a name=\"http://www.w3schools.com\" >W3Schools.com</a>", "<a href=\"http://www.w3schools.com\" >W3Schools</a>", "<a>http://www.w3schools.com</a>"],
        answer: [false, false, true, false]
    },
    {
        title: "Which of these tags are all <table> tags?",
        choices: ["<table><head><tfoot>", "<table><tr><td>", "<thead><body><tr>", "<table><tr><tt>"],
        answer: [false, true, false, false]
    },
    {
        title: "What is the correct HTML for inserting an image?",
        choices: ["<img alt=\"MyImage\">image.gif</img>", "<img src=\"image.gif\" alt=\"MyImage\">", "<image src=\"image.gif\" alt=\"MyImage\">", "<img href=\"image.gif\" alt=\"MyImage\">"],
        answer: [false, true, false, false]
    },
    {
        title: "How can you make a numbered list?",
        choices: ["<ol>", "<ul>", "<dl>", "<list>"],
        answer: [true, false, false, false]
    },
    {
        title: "What is the correct HTML for making a checkbox?",
        choices: ["<checkbox>", "<input type=\"checkbox\">", "<check>", "<input type=\"check\">"],
        answer: [false, true, false, false]
    },
    {
        title: "What does CSS stand for?",
        choices: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: [false, true, false, false]
    },
    {
        title: "What is the correct HTML for referring to an external style sheet?",
        choices: ["<stylesheet>mystyle.css</stylesheet>", "<style src=\"mystyle.css\">", "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">", "<css src=\"mystyle.css\">"],
        answer: [false, false, true, false]
    },
    {
        title: "Which is the correct CSS syntax?",
        choices: ["body {color: black;}", "{body:color=black;}", "body:color=black;", "{body;color:black;}"],
        answer: [true, false, false, false]
    },
    {
        title: "Which property is used to change the background color?",
        choices: ["color", "background-color", "bgcolor", "fill-color"],
        answer: [false, true, false, false]
    },
    {
        title: "How do you add a background color for all <h1> elements?",
        choices: ["h1 {background-color:#FFFFFF;}", "h1.all {background-color:#FFFFFF;}", "all.h1 {background-color:#FFFFFF;}", "h1.any {background-color:#FFFFFF;}"],
        answer: [true, false, false, false]
    },
    {
        title: "Which property is used to change the left margin of an element?",
        choices: ["padding-left", "margin-left", "indent", "left"],
        answer: [false, true, false, false]
    },
    {
        title: "Which sign does jQuery use as a shortcut for jQuery?",
        choices: ["the ? sign", "the # sign", "the $ sign", "the jQuery"],
        answer: [false, false, true, false]
    },
    {
        title: "With jQuery, look at the following selector: $(\"div\"). What does it select?",
        choices: ["All div elements", "The first div element", "any element has a class div", "any element has an id div"],
        answer: [true, false, false, false]
    }
];
var activeQuestion = 1;
function getQuestion() {
    if (activeQuestion <= questionList.length) {
        question.innerText = questionList[activeQuestion - 1].title;
        answer1Text.innerText = questionList[activeQuestion - 1].choices[0];
        answer2Text.innerText = questionList[activeQuestion - 1].choices[1];
        answer3Text.innerText = questionList[activeQuestion - 1].choices[2];
        answer4Text.innerText = questionList[activeQuestion - 1].choices[3];
        document.querySelector(".progress-list ul li:nth-child(" + (activeQuestion) + ")").classList.add('active');
        return true;
    }
    else {
        return false;
    }
}
function checkUserAnswers() {
    var response = answer1.checked == questionList[activeQuestion - 1].answer[0] && answer2.checked == questionList[activeQuestion - 1].answer[1] && answer3.checked == questionList[activeQuestion - 1].answer[2] && answer4.checked == questionList[activeQuestion - 1].answer[3];
    clearChoices();
    return response;
}
next.addEventListener("click", function () {
    saveUserAnswer(checkUserAnswers());
});
function saveUserAnswer(result) {
    results[activeQuestion - 1] = result;
    activeQuestion++;
    if (!getQuestion())
        getUserReult();
    updateLevels();
}
function getUserReult() {
    var points = results.filter(function (el) { return el == true; }).length * 20;
    var score = (points / (questionList.length * 20)) * 100;
    GameWinMessage.querySelector("p #finalScore").innerHTML = Math.ceil(score);
    GameWinMessage.style.transform = "translatex(0%)";
}
function clearChoices() {
    answer1.checked = false;
    answer2.checked = false;
    answer3.checked = false;
    answer4.checked = false;
}
function setQuizzStepsList() {
    var stepsCount = questionList.length;
    for (var i = 0; i < stepsCount; i++) {
        var li = document.createElement('li');
        li.innerText = (i + 1);
        if (i == 0) {
            li.classList.add('active');
        }
        stepsMenu.append(li);
    }
}
setQuizzStepsList();
getQuestion();
function updateLevels() {
    var levelSize = Math.ceil(questionList.length / 3);
    if (results.length < levelSize)
        document.querySelector("#level1").classList.add('active');
    if (levelSize < results.length && results.length < levelSize * 2)
        document.querySelector("#level2").classList.add('active');
    if (levelSize < results.length)
        document.querySelector("#level3").classList.add('active');
}
