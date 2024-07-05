const quizData = [
    {
        question: "Which motorcycle brand is known for the 'Fireblade'?",
        options: ["Yamaha", "Honda", "Kawasaki", "Ducati"],
        correct: "Honda"
    },
    {
        question: "What does 'GSX-R' stand for in Suzuki GSX-R?",
        options: ["Grand Sport Experimental - Racing", "Grand Sport Extra Racing", "Grand Superbike X-tra Racing", "None of the above"],
        correct: "Grand Sport Experimental - Racing"
    },
    {
        question: "Which motorcycle is famously associated with the term 'Ninja'?",
        options: ["Suzuki Hayabusa", "Kawasaki Ninja", "Honda CBR", "Ducati Panigale"],
        correct: "Kawasaki Ninja"
    },
    {
        question: "What is the engine displacement of a Yamaha R1?",
        options: ["600cc", "750cc", "1000cc", "1200cc"],
        correct: "1000cc"
    },
    {
        question: "Which company produces the 'Panigale V4' superbike?",
        options: ["Ducati", "Aprilia", "BMW", "Triumph"],
        correct: "Ducati"
    },
    {
        question: "What is the top speed of a Suzuki Hayabusa (2021 model)?",
        options: ["180 mph", "190 mph", "200 mph", "210 mph"],
        correct: "186 mph"
    },
    {
        question: "Which of these motorcycles is known for its 'S1000RR' model?",
        options: ["BMW", "KTM", "Aprilia", "Triumph"],
        correct: "BMW"
    },
    {
        question: "What does 'CBR' stand for in Honda CBR series?",
        options: ["City Bike Racer", "Cruiser Bike Racer", "Cycle Bike Racer", "None of the above"],
        correct: "Cycle Bike Racer"
    },
    {
        question: "Which company manufactures the 'RSV4' superbike?",
        options: ["Aprilia", "Suzuki", "Kawasaki", "Honda"],
        correct: "Aprilia"
    },
    {
        question: "What is the nickname for the Ducati 916?",
        options: ["The Beast", "The Queen", "The Superbike", "The Doctor"],
        correct: "The Superbike"
    }
];

const quizContainer = document.getElementById('quiz');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const options = currentQuestion.options.map(option =>
        `<label>
            <input type="radio" name="question${currentQuestionIndex}" value="${option}">
            ${option}
        </label>`
    ).join('');

    questionContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <div class="answers">${options}</div>
    `;
}

function checkAnswer() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        if (selectedOption.value === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            showResults();
        }
    }
}

function showResults() {
    questionContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultsContainer.style.opacity = '1';
    resultsContainer.textContent = `Your score: ${score} out of ${quizData.length}`;
}

nextButton.addEventListener('click', checkAnswer);

// Display the first question when the page loads
showQuestion();
