/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
import TestApi from '../data/test-api';

const testInitiator = async () => {
  const startBtn = document.querySelector('.start-button');
  const popupInfo = document.querySelector('.popup-info');
  const exitBtn = document.querySelector('.exit-btn');
  const wrapper = document.querySelector('.wrapper');
  const main = document.querySelector('.main');
  const footer = document.querySelector('.footer-section');
  const continueBtn = document.querySelector('.continue-btn');
  const testSection = document.querySelector('.test-section');
  const testBox = document.querySelector('.test-box');
  const resultBox = document.querySelector('.result-box');
  const tryAgainBtn = document.querySelector('.tryAgain-btn');
  const goHomeBtn = document.querySelector('.goHome-btn');

  let questionCount = 0;
  let questionNumb = 1;
  let userScore = 0;
  let questions = [];

  startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
    wrapper.classList.add('active');
    footer.classList.add('active');
  };

  exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    wrapper.classList.remove('active');
    footer.classList.remove('active');
  };

  continueBtn.onclick = async (e) => {
    e.preventDefault();
    testSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    wrapper.classList.remove('active');
    footer.classList.remove('active');
    testBox.classList.add('active');

    try {
      questions = await TestApi.getQuestions();
      showQuestions(0);
      questionCounter(1);
      headerScore();
    } catch (error) {
      console.error('Failed to start test:', error);
    }
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

    const optionTag = questions[index].options.map((option) => `
      <div class="option">
        <span>${option}</span>
      </div>
    `).join('');

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
      option[i].addEventListener('click', function () {
        optionSelected(this);
      });
    }
  }

  function optionSelected(answer) {
    const userAnswer = answer.textContent.trim();
    const correctAnswer = questions[questionCount].answer.trim();
    const allOptions = optionList.children.length;

    if (userAnswer === correctAnswer) {
      answer.classList.add('correct');
      userScore += 1;
      headerScore();
    } else {
      answer.classList.add('incorrect');

      for (let i = 0; i < allOptions; i++) {
        if (optionList.children[i].textContent.trim() === correctAnswer) {
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
    scoreText.textContent = `Jawaban yang benar ${userScore} dari ${questions.length}`;

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

      if (progressStartValue === progressEndValue) {
        clearInterval(progress);
        showFeedback(progressEndValue);
      }
    }, speed);
  }

  function showFeedback(percentage) {
    const feedbackContainer = document.querySelector('.feedback-container');
    let feedbackMessage = '';

    if (percentage >= 85 && percentage <= 100) {
      feedbackMessage = 'Sangat Baik. Kamu telah menunjukkan pemahaman yang sangat baik.';
    } else if (percentage >= 70 && percentage < 85) {
      feedbackMessage = 'Baik. Kamu memiliki pemahaman yang baik, tetapi masih ada ruang untuk peningkatan.';
    } else if (percentage >= 60 && percentage < 70) {
      feedbackMessage = 'Cukup. Pemahamanmu cukup baik, tetapi ada beberapa hal yang perlu ditingkatkan.';
    } else {
      feedbackMessage = 'Kurang Baik. Kamu perlu lebih banyak belajar untuk meningkatkan pemahamanmu.';
    }

    feedbackContainer.textContent = feedbackMessage;
  }

  const shareWhatsAppBtn = document.getElementById('share-whatsapp');
  shareWhatsAppBtn.addEventListener('click', shareOnWhatsApp);

  function shareOnWhatsApp() {
    const testResult = `Saya baru saja menyelesaikan Tes Literasi dan hasil saya adalah ${userScore} dari ${questions.length}.`;
    const url = 'https://example.com/hasil-tes';
    const message = encodeURIComponent(`${testResult} Ayo uji literasimu juga di: ${url}`);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
};

export default testInitiator;
