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

function startQuiz(){
    let questions = Math.floor(Math.random() * questions.length);
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

