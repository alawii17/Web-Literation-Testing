/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
import questions from '../../data/questions';

const literationTest = {
  async render() {
    return `
    <main class="main">
    <div class="wrapper">
        <section class="test-entry">
            <div class="test-entry-content">
                <h1>Siap?</h1>
                <p>Ayo uji tingkat literasimu dengan menjawab tiap pertanyaan berikut</p>
                <button class="start-button">Mulai Sekarang</button>
            </div>
        </section>
        <section class="test-section">
            <div class="test-box">
                <h1>Tes Literasi</h1>
                <div class="test-header">
                  <span class="header-score">Score: 0/10</span>
                </div>
    
                <h2 class="question-text"></h2>
                <div class="option-list"></div>
    
                <div class="test-footer">
                  <span class="question-total">1 of 10 Questions</span>
                  <button class="next-button">Next</button>
                </div>
              </div>

              <div class="result-box">
                <h2>Quiz Result</h2>
                <div class="percentage-container">
                  <div class="circular-progress">
                    <span class="progress-value">0%</span>
                  </div>
    
                  <span class="score-text">Your Score 0 out of 10</span>
                </div>
    
                <div class="buttons">
                  <button class="tryAgain-btn">Try Again</button>
                  <button class="goHome-btn">Go to home</button>
                </div>
              </div>
        </section>
    </div>
</main>
<div class="popup-info">
    <h2>Panduan Mengisi Tes</h2>
    <span class="info"
      >1. Soal berbentuk pilihan Ganda sebanyak 10 soal.</span
    >
    <span class="info"
      >2. Baca soal dengan teliti dan benar.</span
    >
    <span class="info"
      >3. Setelah membaca jawab soal dengan memilih salah satu pilihan.</span
    >
    <span class="info"
      >4. Tombol next akan berfungsi saat soal telah dijawab.</span
    >
    <div class="btn-group">
      <button class="info-btn exit-btn">Batal</button>
      <a href="#" class="info-btn continue-btn">Mulai</a>
</div>
      `;
  },

  async afterRender() {
    const startBtn = document.querySelector('.start-button');
    const popupInfo = document.querySelector('.popup-info');
    const exitBtn = document.querySelector('.exit-btn');
    const wrapper = document.querySelector('.wrapper');
    const main = document.querySelector('.main');
    const continueBtn = document.querySelector('.continue-btn');
    const testSection = document.querySelector('.test-section');
    const testBox = document.querySelector('.test-box');
    const resultBox = document.querySelector('.result-box');
    const tryAgainBtn = document.querySelector('.tryAgain-btn');
    const goHomeBtn = document.querySelector('.goHome-btn');

    startBtn.onclick = () => {
      popupInfo.classList.add('active');
      main.classList.add('active');
      wrapper.classList.add('active');
    };

    exitBtn.onclick = () => {
      popupInfo.classList.remove('active');
      main.classList.remove('active');
      wrapper.classList.remove('active');
    };

    continueBtn.onclick = () => {
      testSection.classList.add('active');
      popupInfo.classList.remove('active');
      main.classList.remove('active');
      wrapper.classList.remove('active');
      testBox.classList.add('active');

      showQuestions(0);
      questionCounter(1);
      headerScore();
    };

    tryAgainBtn.onclick = () => {
      testBox.classList.add('active');
      nextBtn.classList.remove('active');
      resultBox.classList.remove('active');

      questionCount = 0;
      questionNumb = 1;
      userScore = 0;
      showQuestions(questionCount);
      questionCounter(questionNumb);

      headerScore();
    };

    goHomeBtn.onclick = () => {
      testSection.classList.remove('active');
      nextBtn.classList.remove('active');
      resultBox.classList.remove('active');

      questionCount = 0;
      questionNumb = 1;
      userScore = 0;
      showQuestions(questionCount);
      questionCounter(questionNumb);

      headerScore();
    };

    let questionCount = 0;
    let questionNumb = 1;
    let userScore = 0;

    const nextBtn = document.querySelector('.next-button');

    nextBtn.onclick = () => {
      if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active');
      } else {
        showResultBox();
      }
    };

    const optionList = document.querySelector('.option-list');

    function showQuestions(index) {
      const questionText = document.querySelector('.question-text');
      questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

      const optionTag = `
  <div class="option">
    <span>${questions[index].options[0]}</span>
  </div>
  <div class="option">
    <span>${questions[index].options[1]}</span>
  </div>
  <div class="option">
    <span>${questions[index].options[2]}</span>
  </div>
  <div class="option">
    <span>${questions[index].options[3]}</span>
  </div>
  `;

      optionList.innerHTML = optionTag;

      const option = document.querySelectorAll('.option');
      for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
      }
    }

    function optionSelected(answer) {
      const userAnswer = answer.textContent.trim();
      const correctAnswer = questions[questionCount].answer.trim();
      const allOptions = optionList.children.length;

      if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
      } else {
        answer.classList.add('incorrect');

        // if answer incorrect, auto seleced correct answer
        for (let i = 0; i < allOptions; i++) {
          if (optionList.children[i].textContent.trim() == correctAnswer) {
            optionList.children[i].setAttribute('class', 'option correct');
          }
        }
      }
      for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disable');
      }
      nextBtn.classList.add('active');
    }

    function questionCounter(index) {
      const questionTotal = document.querySelector('.question-total');
      questionTotal.textContent = `${index} of ${questions.length} Questions`;
    }

    function headerScore() {
      const headerScoreText = document.querySelector('.header-score');
      headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
    }

    function showResultBox() {
      testBox.classList.remove('active');
      resultBox.classList.add('active');

      const scoreText = document.querySelector('.score-text');
      scoreText.textContent = `Your score ${userScore} out of ${questions.length}`;

      const circularProgress = document.querySelector('.circular-progress');
      const progressValue = document.querySelector('.progress-value');
      let progressStartValue = -1;
      const progressEndValue = (userScore / questions.length) * 100;
      const speed = 20;

      const progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `
    conic-gradient(#04858b ${progressStartValue * 3.6}deg, 
    rgba(255, 255, 255, 0.1) 0deg)`;

        if (progressStartValue == progressEndValue) {
          clearInterval(progress);
        }
      }, speed);
    }
  },
};

export default literationTest;
