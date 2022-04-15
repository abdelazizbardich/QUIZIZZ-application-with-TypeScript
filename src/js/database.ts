// type Quizz = [{title:string,questions:[{title:string,choices:string[],answer:boolean[]}]}]
const data = [
    {
        title:"level 1",
        questions:[
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
        ]
    },
    {
        title:"level 2",
        questions:[
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
                title:"What does CSS stand for?",
                choices:["Creative Style Sheets","Cascading Style Sheets","Computer Style Sheets","Colorful Style Sheets"],
                answer:[false,true,false,false]
            },
            {
                title:"What is the correct HTML for referring to an external style sheet?",
                choices:["<stylesheet>mystyle.css</stylesheet>","<style src=\"mystyle.css\">","<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">","<css src=\"mystyle.css\">"],
                answer:[false,false,true,false]
            }
        ]
    },
    {
        title:"level 3",
        questions:[
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
                title:"Which sign does jQuery use as a shortcut for jQuery?",
                choices:["the ? sign","the # sign","the $ sign","the jQuery"],
                answer:[false,false,true,false]
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
    }
]


export default JSON.stringify(data)