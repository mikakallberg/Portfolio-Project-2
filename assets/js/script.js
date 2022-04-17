//Elements affected by JavaScript
const question = document.getElementById(#question-area);
const options = document.getElementsByClassName(.options);
const scores = document.getElementsByClassName(.scores);

//Baseline for JavScript
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0; 
let availableQuestions = [];

//Questions 

let question = [
    {
        questions: 'Which option contains organelles?',
        option-one: 'Nucleus, Mitochondrion, Rough endoplasmic reticulum, Maxilla',
        option-two: 'Mitochondrion, Nucleus, Proteasome, Peroxisome',
        option-three: 'Smooth endoplasmic reticulum, Ribosome, Nucleus, Epicondyle',
        option-four: 'Golgi complex, Ribosome, Miochondrion, Ulna',
        answer: 'Mitochondrion, Nucleus, Proteasome, Peroxisome',
    },
    {
        questions: 'Which protein is NOT a part of the cellmembrane?',
        option-one: 'Ion channel',
        option-two: 'Enzyme',
        option-three: 'Linker',
        option-four: 'Transponder',
        answer: 'Transponder',
    },
    {
        questions: 'In which solution does red blood cells swell?',
        option-one: 'Isotonic solution',
        option-two: 'Hypertonic solution',
        option-three: 'Hypotonic soluton',
        option-four: 'Schweppes solution',
        answer: 'Hypotonic soluton',
    },
    {
        questions: 'What is the name of the longest nerve in the body?',
        option-one: 'The sciatic nerve',
        option-two: 'The median nerve',
        option-three: 'The femoral nerve',
        option-four: 'The ischias nerve',
        answer: 'The sciatic nerve',
    },
    {
        questions: 'What is the blood vessel called that transports blood FROM the heart to the lungs?',
        option-one: 'Aorta',
        option-two: 'Vena cava',
        option-three: 'Pulmonary artery',
        option-four: 'Pulmonary veins',
        answer: 'Pulmonary artery',
    },
    {
        questions: 'What are the smallest blood vessels called?',
        option-one: 'arteriols and veins',
        option-two: 'aorta and vena cava',
        option-three: 'capillaries and venoles',
        option-four: 'capillaries and veins',
        answer: 'capillaries and venoles',
    },
    {
        questions: 'Which is the bodies biggest organ?',
        option-one: 'Liver',
        option-two: 'Lungs',
        option-three: 'Skin',
        option-four: 'Small intestines',
        answer: 'Skin',
    },
    {
        questions: 'Which is the bodies biggest internal organ?',
        option-one: 'Liver',
        option-two: 'Stomach',
        option-three: 'Colon',
        option-four: 'Esophagus',
        answer: 'Liver',
    },
    {
        questions: 'What is the area called where urine is first collected?',
        option-one: 'Urinary bladder',
        option-two: 'Ureter',
        option-three: 'Nephron',
        option-four: 'Renal pelvis',
        answer: 'Renal pelvis',
    },
    {
        questions: 'What is the structure called that filtrates the blood and produces urine?',
        option-one: 'Nephrone',
        option-two: 'Arterioles',
        option-three: 'Neurones',
        option-four: 'Renal ganglion',
        answer: 'Nephrone',
    }
]


