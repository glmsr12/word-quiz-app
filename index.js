const quizData = [
    {
        question: 'What is the most common surname in the United States?',
        a: 'West',
        b: 'Washington',
        c: 'Smith',
        d: 'Bush',
        correct: 'c'
    }, {
        question: 'What year was the United Nations established?',
        a: '1921',
        b: '1923',
        c: '1936',
        d: '1945',
        correct: 'd'

    }, {
        question: 'Who has won the most total Academy Awards?',
        a: 'Alfred Newman',
        b: 'Walt Disney',
        c: 'Katharine Hepburn',
        d: 'Denzel Washington',
        correct: 'b'
    }, {
        question: 'Where is Angel Falls, the worlds largest waterfall, located?',
        a: 'Venezuela',
        b: 'Brazil',
        c: 'Canada',
        d: 'Spain',
        correct: 'a'
    }, {
        question: 'What is the most common surname in the United States?',
        a: 'West',
        b: 'Washington',
        c: 'Smith',
        d: 'Bush',
        correct: 'c'
    }, {
        question: 'What year was the United Nations established?',
        a: '1921',
        b: '1923',
        c: '1936',
        d: '1945',
        correct: 'd'

    },
]

const questionEl = document.getElementById
    ('question');

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    const answers = document.querySelectorAll("answer");

    answers.forEach((answer) => {
        console.log(answer.value);
    });
}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        //Message at the end of the quiz
        alert('You finished! Great job! Now get yourself a drink:)');
    }


});
