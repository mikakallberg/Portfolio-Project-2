//Eventlistener that triggers the first question. Copied from Love-Maths runthrough
document.addEventListener('DOMContentLoaded', function(){
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
})

let myQuestions = [
    {
        questionArea: 'Which option contains organelles?',
        optionOne: 'Nucleus, Mitochondrion, Rough endoplasmic reticulum, Maxilla',
        optionTwo: 'Mitochondrion, Nucleus, Proteasome, Peroxisome',
        optionThree: 'Smooth endoplasmic reticulum, Ribosome, Nucleus, Epicondyle',
        optionFour: 'Golgi complex, Ribosome, Miochondrion, Ulna',
        correctAnswer: 'Mitochondrion, Nucleus, Proteasome, Peroxisome',
    },
    {
        questionArea: 'Which protein is NOT a part of the cellmembrane?',
        optionOne: 'Ion channel',
        optionTwo: 'Enzyme',
        optionThree: 'Linker',
        optionFour: 'Transponder',
        correctAnswer: 'Transponder',
    },
   
];


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