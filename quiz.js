const questions = [
    { question: "Čo je 'dog' v slovenčine?", answer: "dog" },
    { question: "Čo je 'cat' v slovenčine?", answer: "cat" },
    { question: "Čo je 'house' v slovenčine?", answer: "house" }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('answerInput').style.display = 'block';
    document.getElementById('submitButton').style.display = 'block';
    document.getElementById('question').textContent = questions[currentQuestionIndex].question;
}

function submitAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('feedback').textContent = 'Correct!';
    } else {
        document.getElementById('feedback').textContent = `Wrong! The correct answer is ${questions[currentQuestionIndex].answer}.`;
    }

    document.getElementById('nextQuestion').style.display = 'block';
    document.getElementById('submitButton').style.display = 'none';
    document.getElementById('answerInput').style.display = 'none';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestionIndex].question;
        document.getElementById('answerInput').value = '';
        document.getElementById('feedback').textContent = '';
        document.getElementById('submitButton').style.display = 'block';
        document.getElementById('answerInput').style.display = 'block';
        document.getElementById('nextQuestion').style.display = 'none';
    } else {
        document.getElementById('questionBox').style.display = 'none';
        document.getElementById('feedback').style.display = 'none';
        document.getElementById('finalScore').style.display = 'block';
        document.getElementById('finalScore').textContent = `Quiz Over! Your final score is ${score} out of ${questions.length}.`;
    }
}
