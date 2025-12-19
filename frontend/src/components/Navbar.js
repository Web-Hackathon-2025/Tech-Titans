// Modern Navbar Component with mobile menu and CTA
export function Navbar() {
    return (
        `<nav class="navbar" data-sticky>
            <div class="navbar__inner">
                <a href="/" class="navbar__brand" aria-label="Karigar homepage">Karigar</a>
                <button class="navbar__toggle" aria-label="Toggle navigation">☰</button>
                <div class="navbar__links">
                    <a href="/" class="navbar__link" data-route="/">Home</a>
                    <a href="/browse" class="navbar__link" data-route="/browse">Services</a>
                    <a href="/about" class="navbar__link" data-route="/about">About</a>
                    <a href="/reviews" class="navbar__link" data-route="/reviews">Reviews</a>
                    <a href="/blog" class="navbar__link" data-route="/blog">Blog</a>
                    <a href="/contact" class="navbar__link" data-route="/contact">Contact</a>
                </div>
                <a href="/login" class="btn btn--primary navbar__cta">Login / Sign Up</a>
            </div>
        </nav>`
    );
}
