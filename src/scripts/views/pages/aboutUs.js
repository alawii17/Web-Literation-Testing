/* eslint-disable no-empty-function */
const aboutUs = {
  async render() {
    return `
    <section class="about-us-content">
          <img src="./image/Logo.png" alt="Deskripsi Gambar" />
          <div class="DeskripsiTentang">
            <h2>Tentang Literation Testing</h2>
            <p>
              Saat ini anda sedang mengakses website Literation Testing.
              Literation Testing dibangun dan dirancang oleh tiga orang dengan
              visi meningkatkan kemampuan literasi masyarakat Indonesia. Dalam
              era digital saat ini, literasi menjadi keterampilan yang sangat
              penting, dan platform ini dirancang untuk membantu mengatasi
              tantangan literasi yang dihadapi masyarakat Indonesia.
            </p>
          </div>
        </section>

        <section class="team-content">
          <h2>Our Team</h2>
          <p>
            Team Literation Testing terdiri dari tiga mahasiswa yang berlatar
            belakang teknologi informasi di Indonesia. Kami akan terus
            berinovasi dan selalu berusaha untuk melakukan yang terbaik dengan
            semangat juang yang tinggi demi menciptakan pengalaman belajar yang
            optimal dengan teknologi terbaru yang kami tawarkan!
          </p>
          <div class="team-card">
            <img
              src="./image/pic-rafli.png"
              alt="Muhammad Rafli Ardiansyah"
            />
            <h3>Muhammad Rafli Ardiansyah</h3>
            <p>Project Manager</p>
            <div class="social-icons">
              <a href="https://www.linkedin.com/"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
              <a href="https://github.com/"
                ><i class="fa-brands fa-square-github"></i
              ></a>
              <a href="https://www.instagram.com/"
                ><i class="fa-brands fa-square-instagram"></i
              ></a>
            </div>
          </div>
          <div class="team-card">
            <img src="./image/pic-alawi.png" alt="Muhammad Alawi Alatas" />
            <h3>Muhammad Alawi Alatas</h3>
            <p>Front-End Developer</p>
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/muhammad-alawi-alatas-2b521b218/"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
              <a href="https://github.com/alawii17"
                ><i class="fa-brands fa-square-github"></i
              ></a>
              <a href="https://www.instagram.com/alawi_alatas15/"
                ><i class="fa-brands fa-square-instagram"></i
              ></a>
            </div>
          </div>
          <div class="team-card">
            <img
              src="./image/pic-nayla.png"
              alt="Yanyan Nayla Damayanti"
            />
            <h3>Yanyan Nayla Damayanti</h3>
            <p>Back-End Developer</p>
            <div class="social-icons">
              <a href="https://www.linkedin.com/" target="_blank"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
              <a href="https://github.com/" target="_blank"
                ><i class="fa-brands fa-square-github"></i
              ></a>
              <a href="https://www.instagram.com/" target="_blank"
                ><i class="fa-brands fa-square-instagram"></i
              ></a>
            </div>
          </div>
        </section>
  `;
  },

  async afterRender() {
  },
};

export default aboutUs;
