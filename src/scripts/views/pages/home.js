import faqInitiator from '../../utils/faq-initiator';

const home = {
  async render() {
    return `
    <section class="hero-section">
      <div class="hero-description">
        <h1>Literation <span>Testing</span></h1>
        <p>Selamat datang! 
          Di sini, kami mempercayai bahwa literasi adalah 
          kunci untuk membuka pintu menuju pengetahuan 
          dan pemahaman yang mendalam. Mari uji dan tingkatkan 
          kemampuan literasi Anda bersama kami.
        </p>
        <a href="#/literationtest" class="button">Cari Tahu Sekarang</a>
      </div>
      <div class="hero-image">
        <img src="./image/vector-Literasi.png" alt="vector-beranda">
      </div>
    </section>
    <section class="test-introduction-section">
      <div class="test-image">
        <img src="./image/Vector-Test.png" alt="vector-test-introduction">
      </div>
      <div class="test-description">
        <h1>Macam - macam <span>Fitur</span></h1>
        <p>Dengan fitur Tes Literasi dan Forum diskusi, kamu bisa mengukur sejauh mana tingkat 
           Literasimu dan mengasahnya. 
        </p>
      </div>
    </section>
    <section class="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-container">
        <div class="faq-item">
          <div class="question">
            <h3>What is the purpose of this website?</h3>
            <span class="toggle-icon">+</span>
          </div>
          <div class="answer">
            <p>This website is designed to help users improve their literacy skills through interactive tests and resources.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <h3>How can I take the literacy test?</h3>
            <span class="toggle-icon">+</span>
          </div>
          <div class="answer">
            <p>To take the literacy test, simply navigate to the "Literacy Test" section from the main menu and follow the instructions provided.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <h3>Can I review my test results?</h3>
            <span class="toggle-icon">+</span>
          </div>
          <div class="answer">
            <p>Yes, you can review your test results immediately after completing the test. Detailed feedback and scores will be provided.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <h3>Is my data secure on this website?</h3>
            <span class="toggle-icon">+</span>
          </div>
          <div class="answer">
            <p>We take your privacy and data security seriously. All your personal information is encrypted and stored securely.</p>
          </div>
        </div>
      </div>
    </section>
  `;
  },

  async afterRender() {
    faqInitiator();
  },
};

export default home;
