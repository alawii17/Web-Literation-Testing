class headerBar extends HTMLElement {
    constructor() {
        super();
        this.setAttribute('custom-attribute', 'value-custom-attribute');
        this.innerHTML = `
        <nav>
            <div class="wrapper">
                <div class="nav-logo">
                    <img src="./image/Logo.png" alt="Logo Lite">
                </div>
                <div class="nav-menu">
                    <ul >
                        <li><a href="#">Beranda</a></li>
                        <li><a href="#">Tes Literasi</a></li>
                        <li><a href="#">Forum Diskusi</a></li>
                        <li><a href="#">Tentang Kami</a></li>
                    </ul>
                </div>
                <div class="nav-login">
                    <a href="#">Masuk</a>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('header-bar', headerBar);