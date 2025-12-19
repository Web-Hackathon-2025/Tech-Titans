// Attractive Footer Component
export function Footer() {
    return `
    <footer class="footer-prof">
      <div class="footer-prof__top">
        <div class="footer-prof__brand">
            <div class="footer-prof__logo"><span style='font-size:2.2rem;'>🔧</span></div>
            <div class="footer-prof__title">Karigar</div>
            <div class="footer-prof__desc">
              Connecting you with trusted local service providers for any need.<br/>
              Reliable, convenient, and transparent.
            </div>
        </div>
        <div class="footer-prof__cols">
          <div class="footer-prof__col">
            <div class="footer-prof__col-title">Learn More</div>
            <a href="/" class="footer-prof__link">About</a>
            <a href="/browse" class="footer-prof__link">Services</a>
            <a href="#reviews" class="footer-prof__link">Reviews</a>
          </div>
          <div class="footer-prof__col">
            <div class="footer-prof__col-title">Connect</div>
            <a href="#giveback" class="footer-prof__link">Give Back</a>
            <a href="#blog" class="footer-prof__link">Blog</a>
            <a href="#careers" class="footer-prof__link">Careers</a>
            <a href="#contact" class="footer-prof__link">Contact</a>
          </div>
          <div class="footer-prof__col">
            <div class="footer-prof__col-title">Contact Info</div>
            <div class="footer-prof__text"><span style='font-size:1.2em;'>📍</span> Karachi, Pakistan</div>
            <div class="footer-prof__text"><span style='font-size:1.2em;'>📧</span> info@karigar.com</div>
            <div class="footer-prof__text"><span style='font-size:1.2em;'>📞</span> 0300-0000000</div>
            <div class="footer-prof__socials">
              <a href="#" class="footer-prof__social"><svg height="22" width="22" fill="#14213d"><rect width="100%" height="100%" rx="5"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="15" fill="#fff">f</text></svg></a>
              <a href="#" class="footer-prof__social"><svg height="22" width="22" fill="#14213d"><rect width="100%" height="100%" rx="5"/><text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="13" fill="#fff">in</text></svg></a>
              <a href="#" class="footer-prof__social"><svg height="22" width="22" fill="#14213d"><rect width="100%" height="100%" rx="5"/><text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="11.5" fill="#fff">ig</text></svg></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-prof__bottom">
        <span>© 2025 Karigar. All rights reserved.</span>
        <span>
          <a href="#" class="footer-prof__policy">Privacy Policy</a> ·
          <a href="#" class="footer-prof__policy">Terms</a> ·
          <a href="#" class="footer-prof__policy">Cookies</a>
        </span>
      </div>
    </footer>
    `;
}
