var questions = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },


]


var ques = document.getElementById('ques')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var index = 0
var btn = document.getElementById('btn')
var score = 0
var min = 1
var sec = 59
var timer = document.getElementById('timer')

var interval = setInterval(function(){
    timer.innerHTML = `${min} : ${sec}`
    sec--
    if(sec <0){
        min--
        sec = 59
        if(min < 0){
            min = 1
            sec = 59
            nextquestion()
            min = 1
            sec =59
        }
    }

},100)





function nextquestion(){
    min = 1
    sec =59


    var getoptions = document.getElementsByName('options')
    for(var i=0; i<getoptions.length; i++){
   
        if(getoptions[i].checked){
           var selectedvalue = getoptions[i].value
           var selectedquestion = questions[index - 1]['question']
           var selectedans = questions[index - 1][`option${selectedvalue}`]
           var correctoption = questions[index - 1]['correctOption']
           if( selectedans == correctoption ){
            score++
           }
           console.log(selectedans) 
        }
        // for default selected checkbox
        getoptions[i].checked = false
        //

    }
    btn.disabled = true

  if(index > questions.length - 1){
        alert( 'Your Percetage is' + " " +((score /questions.length * 100).toFixed(2)))
    }
   

else{
    ques.innerText = questions[index].question
opt1.innerText = questions[index].option1
opt2.innerText = questions[index].option2
opt3.innerText = questions[index].option3
index++

}
   
}

nextquestion()

function clicked(){
    
    btn.disabled = false
}
 


// const btn69 = () =>{

//     location.href='./quiz.html'

// }

// btn.addEventListener('click', btn69)