// script.js
function startQuest() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('question1').style.display = 'block';
}

function checkAnswer(questionId, correctAnswer) {
    const userAnswer = document.getElementById(`answer${questionId.charAt(questionId.length - 1)}`).value.trim().toLowerCase();
    if (userAnswer === correctAnswer.toLowerCase()) {
        document.getElementById(questionId).style.display = 'none';
        const nextQuestion = `question${parseInt(questionId.charAt(questionId.length - 1)) + 1}`;
        document.getElementById(nextQuestion).style.display = 'block';
    } else {
        alert("Ответ неверный, моя любовь! 😘");
    }
}

function checkAnswerOption(questionId, selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        document.getElementById(questionId).style.display = 'none';
        const nextQuestion = `question${parseInt(questionId.charAt(questionId.length - 1)) + 1}`;
        document.getElementById(nextQuestion).style.display = 'block';
    } else {
        alert("Ты ошиблась, но ты близка! 💖");
    }
}
