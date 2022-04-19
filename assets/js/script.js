

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
     },
    
   
];

const result = Array.from(document.getElementsByClassName('score-btn')); 
//Could this be a bug results doesn't turn up anywhere else, result does, but it doesn't fix the problem with coloring score-btn 

let start = true;
var counter = 0;
//Where is iterateQuestions declared?
function iterateQuestions(id){
    //get result
    let result = document.getElementsByClassName('score-btn');
    console.log(result);

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

    var selected = '';

    //Give response to selection for option1
    option1.addEventListener('click', () => {
        option1.style.backgroundColor = '#527c88';
        option2.style.backgroundColor = '#d7baad';
        option3.style.backgroundColor = '#d7baad';
        option4.style.backgroundColor = '#d7baad';
        selected = option1.value
        console.log(option1.value);
        if(selected == true){
            result[counter].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[counter].style.backgroundColor = "#00cc99";
            result[counter].style.border = "#009973 solid";
        }else{
            result[counter].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[counter].style.backgroundColor = "#ff6666";
            result[counter].style.border = "#cc0000 solid";
        }
    })
    //Give response to selection for option2
    option2.addEventListener('click', () => {
        option1.style.backgroundColor = '#d7baad';
        option2.style.backgroundColor = '#527c88';
        option3.style.backgroundColor = '#d7baad';
        option4.style.backgroundColor = '#d7baad';
        selected = option2.value
        console.log(option2.value);
        if(selected == true){
            result[counter].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[counter].style.backgroundColor = "#00cc99";
            result[counter].style.border = "#009973 solid";
        }else{
            result[counter].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[counter].style.backgroundColor = "#ff6666";
            result[counter].style.border = "#cc0000 solid";
        }
    })
    //Give response to selection for option3
    option3.addEventListener('click', () => {
        option1.style.backgroundColor = '#d7baad';
        option2.style.backgroundColor = '#d7baad';
        option3.style.backgroundColor = '#527c88';
        option4.style.backgroundColor = '#d7baad';
        selected = option3.value
        console.log(option3.value);
        if(selected == true){
            result[counter].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[counter].style.backgroundColor = "#00cc99";
            result[counter].style.border = "#009973 solid";
        }else{
            result[counter].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[counter].style.backgroundColor = "#ff6666";
            result[counter].style.border = "#cc0000 solid";
        }
    })
    //Give response to selection for option4
    option4.addEventListener('click', () => {
        option1.style.backgroundColor = '#d7baad';
        option2.style.backgroundColor = '#d7baad';
        option3.style.backgroundColor = '#d7baad';
        option4.style.backgroundColor = '#527c88';
        selected = option4.value
        console.log(option4.value);
        if(selected == true){
            console.log('resultcounter: ', result[counter].innerHTML);
            result[counter].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[counter].style.backgroundColor = "#00cc99";
            result[counter].style.border = "#009973 solid";
        }else{
            result[counter].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[counter].style.backgroundColor = "#ff6666";
            result[counter].style.border = "#cc0000 solid";
        }
    })

    const next = document.getElementsByClassName('next')[0];
    /**var id = 0;*/

    next.addEventListener('click', () => {
        option1.style.backgroundColor = '#d7baad';
        option2.style.backgroundColor = '#d7baad';
        option3.style.backgroundColor = '#d7baad';
        option4.style.backgroundColor = '#d7baad';
        start = false;
    if (id < 10){
        id++;
        iterateQuestions(id);
        console.log(id);
    }
    if (result === counter || result < 10){
        counter++
        iterateQuestions(id);
        console.log(result);
    };
    })
}

if (start){
    iterateQuestions('0');}
/**    


   function iterateQuestions(id){
    //get result

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

    
    }


   const next = document.getElementsByClassName('next')[0];
   var counter = 0;
   var selected = '';

   function selected(){
    //Respond with true or false value to each answer, SHOULD THIS BE MOVED TO FUNCTION BELOW?
    option1.value = myQuestions[id].answers[0].isCorrect;
    option2.value = myQuestions[id].answers[1].isCorrect;
    option3.value = myQuestions[id].answers[2].isCorrect;
    option4.value = myQuestions[id].answers[3].isCorrect;
   //Give response to selection for option1
    option1.addEventListener('click', () => {
        option1.style.backgroundColor = '#527c88';
        option2.style.backgroundColor = '#d7baad';
        option3.style.backgroundColor = '#d7baad';
        option4.style.backgroundColor = '#d7baad';
        selected = option1.value
        console.log(option1.value);
        if(selected == true){
            result[counter].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[counter].style.backgroundColor = "#00cc99";
            result[counter].style.border = "#009973 solid";
        }else{
            result[counter].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[counter].style.backgroundColor = "#ff6666";
            result[counter].style.border = "#cc0000 solid";
        }
    })
    //Give response to selection for option2
    option2.addEventListener('click', () => {
        option1.style.backgroundColor = '#d7baad';
        option2.style.backgroundColor = '#527c88';
        option3.style.backgroundColor = '#d7baad';
        option4.style.backgroundColor = '#d7baad';
        selected = option2.value
        console.log(option2.value);
        if(selected == true){
            result[counter].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[counter].style.backgroundColor = "#00cc99";
            result[counter].style.border = "#009973 solid";
        }else{
            result[counter].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[counter].style.backgroundColor = "#ff6666";
            result[counter].style.border = "#cc0000 solid";
        }
    })
    //Give response to selection for option3
    option3.addEventListener('click', () => {
        option1.style.backgroundColor = '#d7baad';
        option2.style.backgroundColor = '#d7baad';
        option3.style.backgroundColor = '#527c88';
        option4.style.backgroundColor = '#d7baad';
        selected = option3.value
        console.log(option3.value);
        if(selected == true){
            result[counter].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[counter].style.backgroundColor = "#00cc99";
            result[counter].style.border = "#009973 solid";
        }else{
            result[counter].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[counter].style.backgroundColor = "#ff6666";
            result[counter].style.border = "#cc0000 solid";
        }
    })
    //Give response to selection for option4
    option4.addEventListener('click', () => {
        option1.style.backgroundColor = '#d7baad';
        option2.style.backgroundColor = '#d7baad';
        option3.style.backgroundColor = '#d7baad';
        option4.style.backgroundColor = '#527c88';
        selected = option4.value
        console.log(option4.value);
        if(selected == true){
            console.log('resultcounter: ', result[counter].innerHTML);
            result[counter].innerHTML = '<i class="fa-solid fa-check"></i>';
            result[counter].style.backgroundColor = "#00cc99";
            result[counter].style.border = "#009973 solid";
        }else{
            result[counter].innerHTML = '<i class="fa-solid fa-x"></i>';
            result[counter].style.backgroundColor = "#ff6666";
            result[counter].style.border = "#cc0000 solid";
        }
    })
}

   function score (){
   let result = document.getElementsByClassName('score-btn');
    console.log(result);
    /**var id = 0;

    next.addEventListener('click', () => {
        option1.style.backgroundColor = '#d7baad';
        option2.style.backgroundColor = '#d7baad';
        option3.style.backgroundColor = '#d7baad';
        option4.style.backgroundColor = '#d7baad';
        start = false;
    if (id < 10){
        id++;
        iterateQuestions(id);
        console.log(id);
    }
    if (result === counter || result < 10){
        counter++
        iterateQuestions(id);
        console.log(result);
    };
    })
} 

if (start){
    iterateQuestions('0');}*/ 
 



/**gameOver function
 * triggers username input-element
 * value from username input-element and result from number of selected === true
 * displays on result.html id 'score-list'
 */
/**let score = result[10]

function score(counter, id.length){
    var score = `${(counter/ id.length) * 100}% //calculate score in percentage
};*/ //working on gameOver function

/** 

function calculateScore(){

}

startQuiz()
*/