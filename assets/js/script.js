
//All the elements affected by JavaScript
const questionElement = document.getElementById('question-area');
console.log(questionElement);
const option1 = document.getElementById('option-one');
const option2 = document.getElementById('option-two');
const option3 = document.getElementById('option-three');
const option4 = document.getElementById('option-four');
console.log(option4);
const scores = document.getElementsByClassName('scores');

//Questions for the game, different properties (id) are connected to different numbers, which are connected to questions, answers and a boolean that states if the string is correct or not.
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


    let start = true;

//This function connects element in HTML with object in myQuestion array and renders them to browser
const renderQuestions = (index) => {
    console.log('rendering');
    questionElement.innerText = myQuestions[index].questionArea;

    //Looping through all the answer options
    option1.innerText = myQuestions[index].answers[0].text;
    option2.innerText = myQuestions[index].answers[1].text;
    option3.innerText = myQuestions[index].answers[2].text;
    option4.innerText = myQuestions[index].answers[3].text;

};
