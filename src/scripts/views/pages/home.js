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
        <a href="#" class="button">Cari Tahu Sekarang</a>
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
        <h1>Apa itu Literation <span>Testing</span> ?</h1>
        <p>Dengan fitur Tes Literasi, kamu bisa mengukur sejauh mana tingkat 
           Literasimu dan mengasahnya.
        </p>
      </div>
    </section>
  `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default home;
