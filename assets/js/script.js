//Elements I want to affected by JavaScript
const questionArea = document.getElementById('#question-area');
const options = document.getElementsByClassName('.options');
const scores = document.getElementsByClassName('.scores');

//Quiz
function results (){}
//scores.addEventlistener('Click', showResults);<----MUST FIX

//Baseline for JavaScript
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0; 
let availableQuestions = [];



//Questions 

let myQuestions = [
    {
        questions: 'Which option contains organelles?',
        options{
            option1: 'Nucleus, Mitochondrion, Rough endoplasmic reticulum, Maxilla',
            option2: 'Mitochondrion, Nucleus, Proteasome, Peroxisome',
            option3: 'Smooth endoplasmic reticulum, Ribosome, Nucleus, Epicondyle',
            option4: 'Golgi complex, Ribosome, Miochondrion, Ulna'
        },
        correctAnswer: 'Mitochondrion, Nucleus, Proteasome, Peroxisome',
    },
    {
        questions: 'Which protein is NOT a part of the cellmembrane?',
        options{
            option1: 'Ion channel',
            option2: 'Enzyme',
            option3: 'Linker',
            option4: 'Transponder',
        }
        correctAnswer: 'Transponder',
    },
   
];

const SCORE_POINTS = 10%
const MAX_QUESTIONS = 10

function startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...myQuestions];
    getNewQuestion();
}

function getNewQuestion = () =>{
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.scores = currentQuestion.question;
}

