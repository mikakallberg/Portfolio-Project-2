/*Questions for the game, different properties (id) are connected 
*to different numbers, which are connected to questions, answers 
*and a boolean that states if the string is correct or not.
*/
const myQuestions = [
    {
        id: 0,
        questionArea: 
            'Which option contains only organelles?',
        answers: [
            {
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
        questionArea: 
            'Which protein is NOT a part of the cellmembrane?',
        answers: [
            {
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
        questionArea: 
            'In which solution does red blood cells swell?',
        answers: [
            {
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
        questionArea: 
            'What is the name of the longest nerve in the body?',
        answers: [
            {
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
        questionArea: 
        'What is the blood vessel called that transports blood FROM the heart to the lungs?',
        answers: [
            {
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
        questionArea: 
        'What are the smallest blood vessels called?',
        answers: [
            {
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
        questionArea: 
        'Which is the bodies biggest organ?',
        answers: [
            {
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
        questionArea: 
        'Which is the bodies biggest internal organ?',
        answers: [
            {
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
        questionArea: 
        'What is the area called where urine is first collected?',
        answers: [
            {
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
        questionArea: 
        'What is the structure called that filtrates the blood and produces urine?',
        answers: [
            {
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
    const questionElementOne = document.querySelector("score-line-1");
    const questionElementTwo = document.querySelector("score-line-2");
    console.log(questionElementOne, 'questionElement');
    /*Array element that connects to the question declaration 
    *array in myQuestions and if statements
    */
    const myScoresOne = [0, 1, 2, 3, 4];
    const myScoresTwo = [5, 6, 7, 8, 9];
    console.log(myScoresTwo);

    //This function renders the scorecard with it's HTML elements
    function renderScores (){
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
    const optionArea = document.querySelector("option-area");
    console.log(optionArea, 'optionArea');
    /*Function that renders options to optionArea and questions 
    *to questionArea from myQuestions and loops through them all
    */
    function renderQuestions (index){
        
        const question = myQuestions[index];
        const questionEl = document.getElementById("question-area");
        const option1 = document.getElementById('option-one');
        const option2 = document.getElementById('option-two');
        const option3 = document.getElementById('option-three');
        const option4 = document.getElementById('option-four');
        console.log('question', question);
        questionEl.innerText = question.questionArea

        question.answers.forEach((x, i) => {
            optionArea.innerHTML += 
            `<div onclick='handleCheck(${JSON,stringify(index)}, ${JSON.stringify})' 
            class="options" id='option-${i + 1}'>
            <p>${x.text}</p>
            </div>`
        });
        console.log('question.answers');
    };
    




