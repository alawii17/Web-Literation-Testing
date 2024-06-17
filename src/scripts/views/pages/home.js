import faqInitiator from '../../utils/faq-initiator';

const home = {
  async render() {
    return `
    <section class="hero-section">
      <div class="hero-description">
        <h1 tabindex="0">Literation <span>Testing</span></h1>
        <p tabindex="0">Selamat datang! 
          Di sini, kami mempercayai bahwa literasi adalah 
          kunci untuk membuka pintu menuju pengetahuan 
          dan pemahaman yang mendalam. Mari uji dan tingkatkan 
          kemampuan literasi Anda bersama kami.
        </p>
        <a tabindex="0" href="#/literationtest" class="button">Cari Tahu Sekarang</a>
      </div>
      <div class="hero-image">
        <img tabindex="0" src="./image/vector-Literasi.png" alt="vector-beranda">
      </div>
    </section>
    <section class="test-introduction-section">
      <div class="test-image">
        <img tabindex="0" src="./image/Vector-Test.png" alt="vector-test-introduction">
      </div>
      <div class="test-description">
        <h1 tabindex="0">Macam - macam <span>Fitur</span></h1>
        <p tabindex="0">Dengan fitur Tes Literasi dan Forum diskusi, kamu bisa mengukur sejauh mana tingkat 
           Literasimu dan mengasahnya. 
        </p>
      </div>
    </section>
    <section class="faq-section">
      <h2 tabindex="0">Pertanyaan Umum</h2>
      <div class="faq-container">
        <div tabindex="0" class="faq-item">
          <div class="question">
            <h3 tabindex="0">Apa tujuan dari website ini?</h3>
            <button tabindex="0" class="toggle-icon">+</button>
          </div>
          <div class="answer">
            <p tabindex="0">Website ini di desain untuk membantu pengguna menguji tingkat literasi.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <h3 tabindex="0">Bagaimana saya mengakases fitur tes literasi?</h3>
            <button tabindex="0" class="toggle-icon">+</button>
          </div>
          <div class="answer">
            <p tabindex="0">Caranya adalah langsung mengarah ke halaman Tes Literasi dan mengikuti intruksi 
            di halaman tersebut dan untuk fitur tes literasi dapat di akses tanpa harus login terlebih dahulu.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <h3 tabindex="0">Apakah hasil tes nya bisa dilihat?</h3>
            <button tabindex="0" class="toggle-icon">+</button>
          </div>
          <div class="answer">
            <p tabindex="0">Iya, hasil tes akan langsung keluar saat soal tes sudah diisi semua dan selain hasil tes, 
            pengguna juga mendapatkan feedback berdasarkan hasil tes tersebut.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <h3 tabindex="0">Bagaimana cara membuat Diskusi di fitur Forum Diskusi?</h3>
            <button tabindex="0" class="toggle-icon">+</button>
          </div>
          <div class="answer">
            <p tabindex="0">Caranya langsung mengarah ke halaman Forum diskusi dan untuk fitur Forum Diskusi,
            Pengguna harus Login terlebih dahulu untuk bisa mengaksesnya.</p>
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
