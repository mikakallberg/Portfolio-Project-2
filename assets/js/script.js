 /**
     * emptying box when refresh
     * document.getElementById("answer-box").value = "";
     */
  
//Eventlistener that triggers the first question. Copied from Love-Maths runthrough
/**document.addEventListener('DOMContentLoaded', function(){
    let options = document.getElementsByClassName('options');

    for ( let option of options){
        option.addEventListener('click', function() {
            if (this.getAttribute('class') === 'options'){
                alert('You clicked an option!');
            }else {
                let options = this.getAttribute('class');
                alert(`You clicked an ${options}`);
            }
        })
    }
})*/

const myQuestions = [
    {
        id: 0,
        questionArea: 'Which option contains only organelles?',
        answers: [{
            text: 'Nucleus, Mitochondrion, Rough endoplasmic reticulum, Maxilla',
            isCorrect: false
        },
        {
            text: 'Smooth endoplasmic reticulum, Ribosome, Nucleus, Epicondyle',
            isCorrect: false
        },
        {
            text: 'Golgi complex, Ribosome, Miochondrion, Ulna',
            isCorrect: false
        },
        {
            text: 'Mitochondrion, Nucleus, Proteasome, Peroxisome',
            isCorrect: true
        }]
    },
    {
        id: 1,
        questionArea: 'Which protein is NOT a part of the cellmembrane?',
        answers: [{
            text: 'Ion channel',
            isCorrect: false
        },
        {
            text: 'Enzyme',
            isCorrect: false
        },
        {
            text: 'Linker',
            isCorrect: false
        },
        {
            text: 'Transponder',
            isCorrect: true
        }
        ]
     },
    
   
];

let start = true;

function iterateQuestions (id){
    //get result
    let result = document.getElementsByClassName('score-btn');
    result[0].innertext = '';

    //Get the area where questions are to be displayed
    const question = document.getElementById('question-area');

    //Get the text from the array for the question-area
    question.innerText = myQuestions[id].questionArea;

    //Get the four areas where options are to be displayed
    const option1 = document.getElementById('option-one');
    const option2 = document.getElementById('option-two');
    const option3 = document.getElementById('option-three');
    const option4 = document.getElementById('option-four');

    //Get the text for the options from the array
    option1.innerText = myQuestions[id].answers[0].text;
    option2.innerText = myQuestions[id].answers[1].text;
    option3.innerText = myQuestions[id].answers[2].text;
    option4.innerText = myQuestions[id].answers[3].text;

    //Respond with true or false value to each answer
    option1.value = myQuestions[id].answers[0].isCorrect;
    option2.value = myQuestions[id].answers[1].isCorrect;
    option3.value = myQuestions[id].answers[2].isCorrect;
    option4.value = myQuestions[id].answers[3].isCorrect;

    var selected = "";

    //Give response to selection for option1
    option1.addEventListener('click', () => {
        option1.style.backgroundColor = 'lightblue';
        option2.style.backgroundColor = 'yellow';
        option3.style.backgroundColor = 'yellow';
        option4.style.backgroundColor = 'yellow';
        selected = option1.value
        console.log(option1.value);
        if(selected == true){
            result[0].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[0].style.backgroundColor = "#00cc99";
            result[0].style.border = "#009973 solid";
        }else{
            result[0].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[0].style.backgroundColor = "#ff6666";
            result[0].style.border = "#cc0000 solid";
        }
    })
    //Give response to selection for option2
    option2.addEventListener('click', () => {
        option1.style.backgroundColor = 'yellow';
        option2.style.backgroundColor = 'lightblue';
        option3.style.backgroundColor = 'yellow';
        option4.style.backgroundColor = 'yellow';
        selected = option2.value
        console.log(option2.value);
        if(selected == true){
            result[0].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[0].style.backgroundColor = "#00cc99";
            result[0].style.border = "#009973 solid";
        }else{
            result[0].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[0].style.backgroundColor = "#ff6666";
            result[0].style.border = "#cc0000 solid";
        }
    })
    //Give response to selection for option3
    option3.addEventListener('click', () => {
        option1.style.backgroundColor = 'yellow';
        option2.style.backgroundColor = 'yellow';
        option3.style.backgroundColor = 'lightblue';
        option4.style.backgroundColor = 'yellow';
        selected = option3.value
        console.log(option3.value);
        if(selected == true){
            result[0].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[0].style.backgroundColor = "#00cc99";
            result[0].style.border = "#009973 solid";
        }else{
            result[0].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[0].style.backgroundColor = "#ff6666";
            result[0].style.border = "#cc0000 solid";
        }
    })
    //Give response to selection for option4
    option4.addEventListener('click', () => {
        option1.style.backgroundColor = 'yellow';
        option2.style.backgroundColor = 'yellow';
        option3.style.backgroundColor = 'yellow';
        option4.style.backgroundColor = 'lightblue';
        selected = option4.value
        console.log(option4.value);
        if(selected == true){
            result[0].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[0].style.backgroundColor = "#00cc99";
            result[0].style.border = "#009973 solid";
        }else{
            result[0].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[0].style.backgroundColor = "#ff6666";
            result[0].style.border = "#cc0000 solid";
        }
    })

   /**  //Get the evaluate button from html
    const evaluate = document.getElementsByClassName('evaluate');

    //Evaluation
    evaluate[0].addEventListener('click', () => {
        if(selected == true){
            result[0].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[0].style.backgroundColor = "#00cc99";
            result[0].style.border = "#009973 solid";
        }else{
            result[0].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[0].style.backgroundColor = "#ff6666";
            result[0].style.border = "#cc0000 solid";
        }
    })*/

}

if (start){
    iterateQuestions('0');
}

//JS for next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
//emptying box when refresh
document.getElementById("answer-box").value = "";


/** 
function startQuiz(){
    let questions = Math.floor(Math.random() * myQuestions.length);
    console.log("question:" , questions)
}

function displayQuestion(){
    
}

function displayOptions(){

}

function checkAnswer(){

}

function sendCorrect(){

}

function sendInCorrect(){

}

function calculateScore(){

}

startQuiz()
*/