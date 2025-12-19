import { Navbar } from './components/Navbar.js';
import { Home } from './pages/Home.js';
import { Browse, initBrowse } from './pages/Browse.js';
import { Providers, initProviders } from './pages/Providers.js';
import { About, initAbout } from './pages/About.js';
import { Login, initLogin } from './pages/Login.js';
import { Footer } from './components/Footer.js';

const app = document.querySelector('#app');

function render(route) {
    let content;
    switch(route) {
        case '/browse':
            content = Browse(); break;
        case '/login':
            content = Login(); break;
        case '/providers':
            content = Providers(); break;
        case '/about':
            content = About(); break;
        case '/':
        default:
            content = Home();
    }
    app.innerHTML = Navbar() + content + Footer();
    attachNavListeners();

    // Page-specific initializers (call after DOM is rendered)
    setTimeout(() => {
        if (route === '/providers') initProviders?.();
        if (route === '/about') initAbout?.();
        if (route === '/browse') initBrowse?.();
        if (route === '/login') initLogin?.();
    }, 0);
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

    // Intercept hero nav links
    document.querySelectorAll('.home-hero__nav-link').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const href = a.getAttribute('href');
            window.history.pushState({}, '', href);
            render(href);
        });
    });

    // Find Services button routes to /browse
    const cta = document.querySelector('.hero-button');
    if (cta) {
        cta.addEventListener('click', () => {
            window.history.pushState({}, '', '/browse');
            render('/browse');
        });
    }
}

// Handle browser back/forward
window.onpopstate = () => {
    render(window.location.pathname);
};

// Initial render
render(window.location.pathname);
