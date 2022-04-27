/*Questions for the game, different properties (id) are connected 
 *to different numbers, which are connected to questions, answers 
 *and a boolean that states if the string is correct or not.
 */
const myQuestions = [{
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
        }
    ]
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
{
    id: 2,
    questionArea: 'In which solution does red blood cells swell?',
    answers: [{
            text: 'Isotonic solution',
            isCorrect: false
        },
        {
            text: 'Hypertonic solution',
            isCorrect: false
        },
        {
            text: 'Hypotonic soluton',
            isCorrect: true
        },
        {
            text: 'Schweppes solution',
            isCorrect: false
        }
    ]
},
{
    id: 3,
    questionArea: 'What is the name of the longest nerve in the body?',
    answers: [{
            text: 'The sciatic nerve',
            isCorrect: true
        },
        {
            text: 'The median nerve',
            isCorrect: false
        },
        {
            text: 'The femoral nerve',
            isCorrect: false
        },
        {
            text: 'The ischias nerve',
            isCorrect: false
        }
    ]
},
{
    id: 4,
    questionArea: 'What is the blood vessel called that transports blood FROM the heart to the lungs?',
    answers: [{
            text: 'Aorta',
            isCorrect: false
        },
        {
            text: 'Vena cava',
            isCorrect: false
        },
        {
            text: 'Pulmonary artery',
            isCorrect: true
        },
        {
            text: 'Pulmonary veins',
            isCorrect: false
        }
    ]
},
{
    id: 5,
    questionArea: 'What are the smallest blood vessels called?',
    answers: [{
            text: 'arteriols and veins',
            isCorrect: false
        },
        {
            text: 'aorta and vena cava',
            isCorrect: false
        },
        {
            text: 'capillaries and venoles',
            isCorrect: true
        },
        {
            text: 'capillaries and veins',
            isCorrect: false
        }
    ]
},
{
    id: 6,
    questionArea: 'Which is the bodies biggest organ?',
    answers: [{
            text: 'Liver',
            isCorrect: false
        },
        {
            text: 'Lungs',
            isCorrect: false
        },
        {
            text: 'Skin',
            isCorrect: true
        },
        {
            text: 'Small intestines',
            isCorrect: false
        }
    ]
},
{
    id: 7,
    questionArea: 'Which is the bodies biggest internal organ?',
    answers: [{
            text: 'Liver',
            isCorrect: true
        },
        {
            text: 'Stomach',
            isCorrect: false
        },
        {
            text: 'Colon',
            isCorrect: false
        },
        {
            text: 'Esophagus',
            isCorrect: false
        }
    ]
},
{
    id: 8,
    questionArea: 'What is the area called where urine is first collected?',
    answers: [{
            text: 'Urinary bladder',
            isCorrect: false
        },
        {
            text: 'Ureter',
            isCorrect: false
        },
        {
            text: 'Nephron',
            isCorrect: false
        },
        {
            text: 'Renal pelvis',
            isCorrect: true
        }
    ]
},
{
    id: 9,
    questionArea: 'What is the structure called that filtrates the blood and produces urine?',
    answers: [{
            text: 'Nephrone',
            isCorrect: true
        },
        {
            text: 'Arterioles',
            isCorrect: false
        },
        {
            text: 'Neurones',
            isCorrect: false
        },
        {
            text: 'Renal ganglion',
            isCorrect: false
        }
    ]
}

];

//The user initiates the game through clicking a text with a link in index.html
//So the quiz starts automatically from quizz.html
let start = true;
let score = 0;
var counter = 0;
console.log(start);
console.log(score);
console.log(counter);

//The trigger to run the next question goes through the score-area
const questionElementOne = document.querySelector("#score-line-1")
const questionElementTwo = document.querySelector("#score-line-2")
console.log(questionElementOne, 'questionElement');
/*Array element that connects to the question declaration 
*array in myQuestions and if statements
*/
const myScoresOne = [0, 1, 2, 3, 4]
const myScoresTwo = [5, 6, 7, 8, 9]
console.log(myScoresTwo);

//This function renders the scorecard with it's HTML elements
function renderScores() {
console.log('scores');
myScoresOne.forEach(question => {
        questionElementOne.innerHTML += `<h3 class="score-btn" id=${question}>${question + 1}</h3>`
    }),
    myScoresTwo.forEach(question => {
        questionElementTwo.innerHTML += `<h3 class="score-btn" id=${question}>${question + 1}</h3>`
    })

};

//Calling function renderScores
renderScores();
console.log('Scores');
//Declaring the area where answers will be placed
const optionArea = document.querySelector("#option-area");
console.log(optionArea, 'optionArea');
/*Function that renders options to optionArea and questions 
*to questionArea from myQuestions and loops through them all
*/
function renderQuestions(index) {
if (index > 9){
    scoreTotal ();
    return
};
const question = myQuestions[index];
const questionEl = document.getElementById("question-area");
const option1 = document.getElementById('option-one');
const option2 = document.getElementById('option-two');
const option3 = document.getElementById('option-three');
const option4 = document.getElementById('option-four');
console.log('question');
questionEl.innerText = question.questionArea

question.answers.forEach((x, i) => {
    optionArea.innerHTML += `
        <div onclick='handleCheck(${JSON.stringify(index)}, ${JSON.stringify})' 
        class="options" id='option-${i + 1}'>
        <p>${x.text}</p>
        </div>`
});
console.log('question.answers');
};
console.log('It ends here');

//Function to clear all the question and option elements between the loops
function clearQuestions() {
console.log('clearQuestions');
const questionEl = document.getElementById('question-area');
questionEl.innerText = "";
optionArea.innerHTML = "";
};
console.log('or it ends here');

/*Function that goes in to effect at the end of question 10
*it renders a pulls on the clearQuestions function and clears the board
*while rendering a score message with the users score and a message
*/
function scoreTotal() {
console.log('scoreTotal');
clearQuestions();
const questionEl = document.getElementById('question-area');
if (score <= 4) {
    questionEl.innerHTML = `<p>Well done you scored ${score} out of 10</p>`
} else if (score >= 5 && score <= 7) {
    questionEl.innerHTML = `<p>Amazing you scored ${score} out of 10</p>`
} else {
    questionEl.innerHTML = `<p>Well hello there colleague! You scored ${score} out of 10, are you sure you are not a helathcare worker</p>`
}
console.log('where does it end?');
};
console.log('does it end here?');

//Declaring questionIndex beginning at 0
let questionIndex = 0;{
if (questionIndex < 10) {
    renderQuestions(questionIndex);
}
console.log('if statement');
};

/*Function that loops through the scorecard and updates the
*HTML elements with a fontawesome symbol and a change of colordesign
*/
function handleCheck(index, x) {
const selectedAnswerOne = myScoresOne.find(x => x == index);
const selectedAnswerTwo = myScoresTwo.find(x => x == index);

let scoreLineOne = document.getElementById(`${selectedAnswerOne}`);
let scoreLineTwo = document.getElementById(`${selectedAnswerTwo}`);
if (questionIndex <= 4) {
    console.log('questionindex<5');
    if (x.isCorrect == true) {
        console.log('x.isCorrect');
        scoreLineOne.innerHTML = '<i class="fa-solid fa-check"></i>';
        scoreLineOne.style.backgroundColor = "#00cc99";
        scoreLineOne.style.border = "#009973 solid";
        score++
    } else {
        scoreLineOne.innerHTML = '<i class="fa-solid fa-x"></i>';
        scoreLineOne.style.backgroundColor = "#ff6666";
        scoreLineOne.style.border = "#cc0000 solid";
    }
    if (questionIndex <= 9) {
        clearQuestions();
        questionIndex++;
        renderQuestions(questionIndex);
    } else {
        scoreTotal();
    }
} else if (questionIndex >= 5 && questionIndex <= 9) {
    console.log('questionIndex >=5 && questionIndex <=9');
    if (x.isCorrect == true) {
        console.log('x.isCorrect');
        scoreLineTwo.innerHTML = '<i class="fa-solid fa-check"></i>';
        scoreLineTwo.style.backgroundColor = "#00cc99";
        scoreLineTwo.style.border = "#009973 solid";
        score++
    } else {
        scoreLineTwo.innerHTML = '<i class="fa-solid fa-x"></i>';
        scoreLineTwo.style.backgroundColor = "#ff6666";
        scoreLineTwo.style.border = "#cc0000 solid";
    }
    if (questionIndex <= 9) {
        clearQuestions();
        questionIndex++;
        renderQuestions(questionIndex);
    } else {
        scoreTotal();
        console.log('scoreTotal');
    }
}
}

