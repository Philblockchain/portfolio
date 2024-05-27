const questions = [
    { question: "Auto", answer: "Car" },
    { question: "Strom", answer: "Tree" },
    { question: "Kvety", answer: "Flowers" },
    { question: "Počítač", answer: "Computer" },
    { question: "Rieka", answer: "River" },
    { question: "Hora", answer: "Mountain" },
    { question: "Ulica", answer: "Street" },
    { question: "More", answer: "Sea" },
    { question: "Lekár", answer: "Doctor" },
    { question: "Učiteľ", answer: "Teacher" },
    { question: "Obchod", answer: "Shop" },
    { question: "Koláč", answer: "Cake" },
    { question: "Srdce", answer: "Heart" },
    { question: "Ruka", answer: "Hand" },
    { question: "Nohy", answer: "Legs" },
    { question: "Lopta", answer: "Ball" },
    { question: "Oblečenie", answer: "Clothing" },
    { question: "Zima", answer: "Winter" },
    { question: "Leto", answer: "Summer" },
    { question: "Deň", answer: "Day" },
    { question: "Mesto", answer: "City" },
    { question: "Vlak", answer: "Train" },
    { question: "Pes", answer: "Dog" },
    { question: "Mačka", answer: "Cat" },
    { question: "Okno", answer: "Window" },
    { question: "Dvere", answer: "Door" },
    { question: "Stôl", answer: "Table" },
    { question: "Stolička", answer: "Chair" },
    { question: "Pero", answer: "Pen" },
    { question: "Kniha", answer: "Book" },
    { question: "Časopis", answer: "Magazine" },
    { question: "Televízor", answer: "Television" },
    { question: "Telefón", answer: "Phone" },
    { question: "Hodiny", answer: "Clock" },
    { question: "Kľúč", answer: "Key" },
    { question: "Láska", answer: "Love" },
    { question: "Pivo", answer: "Beer" },
    { question: "Víno", answer: "Wine" },
    { question: "Jablko", answer: "Apple" },
    { question: "Hruška", answer: "Pear" },
    { question: "Mrkva", answer: "Carrot" },
    { question: "Zelenina", answer: "Vegetable" },
    { question: "Ovocie", answer: "Fruit" },
    { question: "Mlieko", answer: "Milk" },
    { question: "Syr", answer: "Cheese" },
    { question: "Vajce", answer: "Egg" },
    { question: "Mäso", answer: "Meat" },
    { question: "Ryba", answer: "Fish" },
    { question: "Hlava", answer: "Head" },
    { question: "Telo", answer: "Body" }
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    selectedQuestions = getRandomQuestions(questions, 20);
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('question').style.display = 'none';
    document.querySelector('.input-container').style.display = 'flex';
    document.getElementById('submitButton').style.display = 'inline-block';
    document.getElementById('startButton').style.display = 'none';
    nextQuestion();
}

function getRandomQuestions(array, num) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        document.getElementById('feedback').innerHTML = '';
        document.getElementById('nextQuestion').style.display = 'none';
        document.getElementById('submitButton').style.display = 'inline-block';
        document.getElementById('answerInput').style.display = 'inline-block';
        document.getElementById('questionText').innerText = `What does ${selectedQuestions[currentQuestionIndex].question} mean?`;
        document.getElementById('answerInput').value = '';
        document.getElementById('answerInput').focus();
    } else {
        endQuiz();
    }
}

function submitAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase();
    const correctAnswer = selectedQuestions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('feedback').innerText = 'Correct!';
    } else {
        document.getElementById('feedback').innerText = `Incorrect! This means ${selectedQuestions[currentQuestionIndex].answer}.`;
    }

    currentQuestionIndex++;
    document.getElementById('answerInput').style.display = 'none';
    document.getElementById('submitButton').style.display = 'none';
    document.getElementById('nextQuestion').style.display = 'inline-block';
}

function endQuiz() {
    document.querySelector('.input-container').style.display = 'none';
    document.getElementById('submitButton').style.display = 'none';
    document.getElementById('nextQuestion').style.display = 'none';
    document.getElementById('finalScore').style.display = 'block';
    document.getElementById('finalScore').innerText = `You scored ${score} out of ${selectedQuestions.length}!`;
    document.getElementById('finalMessage').style.display = 'block';
}

function tryAgain() {
    document.getElementById('finalScore').style.display = 'none';
    document.getElementById('finalMessage').style.display = 'none';
    startQuiz();
}
