//Elements I want to affected by JavaScript
const timer = document.getElementById('#timer');
const questionArea = document.getElementById('#question-area');
const optionOne = document.getElementById('#option-one');
const optionTwo = document.getElementById('#option-two');
const optionThree = document.getElementById('#option-three');
const optionFour = document.getElementById('#option-four');
const scoresBtn = document.getElementsByClassName('.score-btn');

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
            optionOne: 'Nucleus, Mitochondrion, Rough endoplasmic reticulum, Maxilla',
            optionTwo: 'Mitochondrion, Nucleus, Proteasome, Peroxisome',
            optionThree: 'Smooth endoplasmic reticulum, Ribosome, Nucleus, Epicondyle',
            optionFour: 'Golgi complex, Ribosome, Miochondrion, Ulna'
        },
        correctAnswer: 'Mitochondrion, Nucleus, Proteasome, Peroxisome',
    },
    {
        questions: 'Which protein is NOT a part of the cellmembrane?',
        options{
            optionOne: 'Ion channel',
            optionTwo: 'Enzyme',
            optionThree: 'Linker',
            optionFour: 'Transponder',
        }
        correctAnswer: 'Transponder',
    },
   
];

const SCORE_POINTS = 10%
const MAX_QUESTIONS = 2

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

