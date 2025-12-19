import { Navbar } from './components/Navbar.js';
import { Home } from './pages/Home.js';
import { Browse } from './pages/Browse.js';
import { Login } from './pages/Login.js';
import { Footer } from './components/Footer.js';

const app = document.querySelector('#app');

function render(route) {
    let content;
    switch(route) {
        case '/browse':
            content = Browse(); break;
        case '/login':
            content = Login(); break;
        case '/':
        default:
            content = Home();
    }
    app.innerHTML = Navbar() + content + Footer();
    attachNavListeners();
}

function attachNavListeners() {
    // Intercept nav clicks (for client-side routing)
    document.querySelectorAll('nav a').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const href = a.getAttribute('href');
            window.history.pushState({}, '', href);
            render(href);
        });
    });
}

// Handle browser back/forward
window.onpopstate = () => {
    render(window.location.pathname);
};

render(window.location.pathname);
