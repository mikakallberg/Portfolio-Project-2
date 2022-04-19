

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

const results = Array.from(document.getElementsByClassName('score-btn'));

let start = true;
let counter = 0;


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
    if (id < 2){
        id++;
        iterateQuestions(id);
        console.log(id);
    }
    if (result = [counter] || result < 10){
        counter++
        iterateQuestions(id);
        console.log(result);
    };
    })
}

if (start){
    iterateQuestions('0');
}

/** 
function startQuiz(){
    let questions = Math.floor(Math.random() * myQuestions.length);
    console.log("question:" , questions)
}

function calculateScore(){

}

startQuiz()
*/