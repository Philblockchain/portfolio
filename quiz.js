const questions = [
    { question: "What does 'Auto' mean?", answer: "car" },
    { question: "What does 'Strom' mean?", answer: "tree" },
    { question: "What does 'Kvety' mean?", answer: "flowers" },
    { question: "What does 'Počítač' mean?", answer: "computer" },
    { question: "What does 'Rieka' mean?", answer: "river" },
    { question: "What does 'Hora' mean?", answer: "mountain" },
    { question: "What does 'Ulica' mean?", answer: "street" },
    { question: "What does 'More' mean?", answer: "sea" },
    { question: "What does 'Lekár' mean?", answer: "doctor" },
    { question: "What does 'Učiteľ' mean?", answer: "teacher" },
    { question: "What does 'Obchod' mean?", answer: "shop" },
    { question: "What does 'Koláč' mean?", answer: "cake" },
    { question: "What does 'Srdce' mean?", answer: "heart" },
    { question: "What does 'Ruka' mean?", answer: "hand" },
    { question: "What does 'Nohy' mean?", answer: "legs" },
    { question: "What does 'Lopta' mean?", answer: "ball" },
    { question: "What does 'Oblečenie' mean?", answer: "clothing" },
    { question: "What does 'Zima' mean?", answer: "winter" },
    { question: "What does 'Leto' mean?", answer: "summer" },
    { question: "What does 'Deň' mean?", answer: "day" },
    { question: "What does 'Mesto' mean?", answer: "city" },
    { question: "What does 'Vlak' mean?", answer: "train" },
    { question: "What does 'Pes' mean?", answer: "dog" },
    { question: "What does 'Mačka' mean?", answer: "cat" },
    { question: "What does 'Okno' mean?", answer: "window" },
    { question: "What does 'Dvere' mean?", answer: "door" },
    { question: "What does 'Stôl' mean?", answer: "table" },
    { question: "What does 'Stolička' mean?", answer: "chair" },
    { question: "What does 'Pero' mean?", answer: "pen" },
    { question: "What does 'Kniha' mean?", answer: "book" },
    { question: "What does 'Časopis' mean?", answer: "magazine" },
    { question: "What does 'Televízor' mean?", answer: "television" },
    { question: "What does 'Telefón' mean?", answer: "phone" },
    { question: "What does 'Hodiny' mean?", answer: "clock" },
    { question: "What does 'Kľúč' mean?", answer: "key" },
    { question: "What does 'Láska' mean?", answer: "love" },
    { question: "What does 'Pivo' mean?", answer: "beer" },
    { question: "What does 'Víno' mean?", answer: "wine" },
    { question: "What does 'Jablko' mean?", answer: "apple" },
    { question: "What does 'Hruška' mean?", answer: "pear" },
    { question: "What does 'Mrkva' mean?", answer: "carrot" },
    { question: "What does 'Zelenina' mean?", answer: "vegetable" },
    { question: "What does 'Ovocie' mean?", answer: "fruit" },
    { question: "What does 'Mlieko' mean?", answer: "milk" },
    { question: "What does 'Syr' mean?", answer: "cheese" },
    { question: "What does 'Vajce' mean?", answer: "egg" },
    { question: "What does 'Mäso' mean?", answer: "meat" },
    { question: "What does 'Ryba' mean?", answer: "fish" },
    { question: "What does 'Hlava' mean?", answer: "head" },
    { question: "What does 'Telo' mean?", answer: "body" }
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
        document.getElementById('feedback').textContent = `Incorrect! This means ${questions[currentQuestionIndex].answer}.`;
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
