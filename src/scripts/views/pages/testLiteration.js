import testInitiator from '../../utils/test-initiator';

const literationTest = {
  async render() {
    return `
    <main class="main" id="main-content">
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
                <h2>Hasil tes</h2>
                <div class="percentage-container">
                  <div class="circular-progress">
                    <span class="progress-value">0%</span>
                  </div>
    
                  <span class="score-text"></span>
                </div>
                <div class="feedback-container"></div>
    
                <div class="buttons">
                  <button class="tryAgain-btn">Coba lagi</button>
                  <button class="goHome-btn">Kembali</button>
                </div>
                <div class="share-buttons">
                    <button id="share-whatsapp" class="share-btn">
                      <i class="fa-brands fa-whatsapp"></i>
                      Bagikan hasil tes
                    </button>
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
    testInitiator();
  },
};

export default literationTest;
