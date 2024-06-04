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
            <section class="waves">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#393E46" fill-opacity="1" 
                    d="M0,64L80,85.3C160,107,320,149,480,160C640,171,800,149,960,122.7C1120,
                    96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,
                    320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path>
                </svg>
            </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default home;
