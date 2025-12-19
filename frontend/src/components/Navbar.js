// Modern styled Navbar Component (React-like bits)
export function Navbar() {
    return (
        `<nav class="navbar">
            <div class="navbar__brand">Karigar</div>
            <div class="navbar__links">
                <a href="/" class="navbar__link">Home</a>
                <a href="/browse" class="navbar__link">Browse Services</a>
                <a href="/login" class="navbar__link navbar__login">Login/Signup</a>
            </div>
        </nav>`
    );
}
