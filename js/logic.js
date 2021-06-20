//logica Trivia
// ELEMENTOS OBTENIDOS
let triviaFrom = document.getElementById('principal-form');
let triviaQuestions = document.getElementById('dev-questions');
let userName = document.getElementById('name-user');
let pintUserName = document.getElementById('name-questions-user');
let infoQuestions = document.getElementById('infoQuestion');
let amount = document.getElementById('numQuestions');
let category = document.getElementById('category');
let difficulty = document.getElementById('difficulty');
let type = document.getElementById('type');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

// variables de control
let questions;

// FUNCIONES
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

// funcion que me manda a iniciar as preguntas
const startGame = () => {
    triviaFrom.style.display = 'none';
    triviaQuestions.style.display = 'block';
    // for( let i = 0; i < questions; i++){
    //     infoQuestion.innerText = `Number of questions: ${amount.value}, Category: ${category.value}, Difficulty: ${difficulty.value}, Type: ${type.value}`;
    // }
    console.log(questions);
    if(type === 'boolean'){
        btn3.style.display = 'none';
        btn4.style.display = 'none';
    }
}



triviaFrom.addEventListener('submit', getData);







// //logica Trivia
// // ELEMENTOS OBTENIDOS
// let triviaFrom = document.getElementById('principal-form');
// let triviaQuestions = document.getElementById('dev-questions');
// let userName = document.getElementById('name-user');
// let pintUserName = document.getElementById('name-questions-user');
// let infoQuestions = document.getElementById('infoQuestion');
// let amount = document.getElementById('numQuestions');
// let category = document.getElementById('category');
// let difficulty = document.getElementById('difficulty');
// let type = document.getElementById('type');

// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const btn3 = document.getElementById('btn3');
// const btn4 = document.getElementById('btn4');

// // variables de control
// let questions;

// // FUNCIONES
// getData = (prevent) => {
//  prevent.preventDefault();

// //pinta el nombre
// pintUserName.innerText = `Hello ${userName.value} !`;

// // peticion a la api
// let = urlApi = `https://opentdb.com/api.php?amount=${amount.value}&category=${category.value}&difficulty=${difficulty.value}&type=${type.value}`;

// // fetch
// fetch(urlApi)
//     .then(ResponseApi => {
//         return ResponseApi.json();
//     }).then(dataApi =>{
//         questions = dataApi.results;
//         startGame();
//     });
// };

// // funcion que me manda a iniciar as preguntas
// const startGame = () => {
//     triviaFrom.style.display = 'none';
//     triviaQuestions.style.display = 'block';
//     infoQuestion.innerText = `Number of questions: ${amount.value}, Category: ${category.value}, Difficulty: ${difficulty.value}, Type: ${type.value}`;
//     console.log(questions);
//     if(type === 'boolean'){
//         btn3.style.display = 'none';
//         btn4.style.display = 'none';
//     }
// }



// triviaFrom.addEventListener('submit', getData);