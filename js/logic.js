//logica Trivia
// ELEMENTOS OBTENIDOS
let btn_restart = document.getElementById('btnRestart');
let triviaEndGame = document.getElementById('triviaEndGame');
let EGname = document.getElementById('EGname');
let end_game_p = document.getElementById('end-game-p');
let triviaFrom = document.getElementById('principal-form');
let triviaQuestions = document.getElementById('dev-questions');
let userName = document.getElementById('name-user');
let pintUserName = document.getElementById('name-questions-user');
let infoQuestions = document.getElementById('infoQuestion');
let pquestion = document.getElementById('pquestion');
let amount = document.getElementById('numQuestions');
let category = document.getElementById('category');
let difficulty = document.getElementById('difficulty');
let type = document.getElementById('type');
let Rbuttons = document.getElementsByClassName('Rbutton');

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');

// variables de control
let questions;
let indexQuestion = 0;
let controlQuestions;
let j = 0;
let score = 0;

// FUNCIONES

const btnRestart = () => {
    triviaFrom.style.display = 'block';
    triviaQuestions.style.display = 'none';
    triviaEndGame.style.display = 'none';
    triviaFrom.reset();
}

const endGame = (score, amount) =>{
    triviaFrom.style.display = 'none';
    triviaQuestions.style.display = 'none';
    triviaEndGame.style.display = 'block';
    EGname.innerText = `${userName.value} End Game!`;
    end_game_p.innerText = `You score is: ${score}/${amount}`;
    btn_restart.addEventListener('click',  () => btnRestart());
};

getData = (prevent) => {
 prevent.preventDefault();

//pinta el nombre
pintUserName.innerText = `Hello ${userName.value} !`;

// peticion a la api
let = urlApi = `https://opentdb.com/api.php?amount=${amount.value}&category=${category.value}&difficulty=${difficulty.value}&type=${type.value}`;

// fetch
fetch(urlApi)
    .then(ResponseApi => {
        return ResponseApi.json();
    }).then(dataApi =>{
        questions = dataApi.results;
        startGame();
    });
};

// funcion que me manda a iniciar las preguntas
const startGame = () => {

    // console.log(score);

    // ocultar y presentar las interfaces
    triviaFrom.style.display = 'none';
    triviaQuestions.style.display = 'block';

    // variable currentQuestion para acceder a la informacion del arreglo de la pregunta actual
    let currentQuestion = questions[indexQuestion];

    // linea de informacion de la pregunta actual
    infoQuestion.innerText = `Number of questions: ${amount.value}, Category: ${currentQuestion.category}, Difficulty: ${currentQuestion.difficulty}, Type: ${currentQuestion.type}`;

    // texto de la pregunta
    pquestion.innerHTML = currentQuestion.question;


    // en caso de que la pregunta sea de tipo boleana
    if(currentQuestion.type === 'boolean'){
        btn1.innerText = 'True';
        btn2.innerText = 'False';
        btn3.style.display = 'none';
        btn4.style.display = 'none';
        if(currentQuestion.correct_answer === 'True'){
            controlQuestions = 1;
        }else{
            controlQuestions = 2;
        }
    }else{

        // en caso de que sea opcion multiple y pintamos la respuesta correcta
        controlQuestions = Math.floor(Math.random() * 4) + 1;
        let correct = document.getElementById(controlQuestions).innerText = currentQuestion.correct_answer;
        // console.log(correct);
        console.log(controlQuestions);

        // pintamos las demas respuestas
        for(let i = 1; i <= 4; i++){
            if(i === controlQuestions) continue;
            document.getElementById(i).innerText = currentQuestion.incorrect_answers[j];
            j++;
        }
    }
};

// al seleccionar una opcion
const selectResponse = (id) => {
    let IdAnswer = parseInt(id);
    if(IdAnswer === controlQuestions){
        console.log('Respuesta correcta!!');
        score++;
    }else{
        console.log('Respuesta incorrecta!!');
    }

    if(indexQuestion < (amount.value - 1)) {
        indexQuestion++;
        startGame();
    }else if (indexQuestion == (amount.value -1)){
        endGame(score, amount.value);
    }
};


for(let i = 0; i < Rbuttons.length; i++){
    const btns = Rbuttons[i];
    btns.addEventListener('click', () => selectResponse(btns.id));
}

triviaFrom.addEventListener('submit', getData);