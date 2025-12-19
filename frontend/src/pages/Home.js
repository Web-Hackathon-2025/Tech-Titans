// Attractive Home Page Component with Olive & Beige Theme
import { SearchInput } from '../components/SearchInput.js';
import { HeroButton } from '../components/HeroButton.js';
import { HeroIllustration } from '../components/HeroIllustration.js';
// DownloadSection removed per request

export function Home() {
    return `
        <div class="home-hero">
            <div class="home-hero__left">
                <div class="home-hero__content">
                    <div class="home-hero__logo">Karigar</div>
                    <h1 class="home-hero__title">Find Trusted Service Providers</h1>
                    <p class="home-hero__subtitle">Book reliable professionals for any task, anytime.</p>
                    
                    <div class="home-hero__search">
                        ${SearchInput({ placeholder: 'What service do you need?', icon: '🔍' })}
                        ${SearchInput({ placeholder: 'Enter your location', icon: '📍' })}
                    </div>
                    
                    ${HeroButton({ text: 'Find Services', arrow: true, variant: 'primary' })}

                    <div class="home-hero__categories">
                        <span class="chip">Plumbing</span>
                        <span class="chip">Electrician</span>
                        <span class="chip">Cleaning</span>
                        <span class="chip">Painting</span>
                        <span class="chip">AC Repair</span>
                        <span class="chip">Gardening</span>
                    </div>

                    <div class="home-stats">
                        <div class="stat">
                            <div class="stat__num">10k+</div>
                            <div class="stat__label">Happy Customers</div>
                        </div>
                        <div class="stat">
                            <div class="stat__num">1k+</div>
                            <div class="stat__label">Verified Pros</div>
                        </div>
                        <div class="stat">
                            <div class="stat__num">24/7</div>
                            <div class="stat__label">Support</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="home-hero__right">
                <div class="home-hero__nav">
                    <a href="/browse" class="home-hero__nav-link">Services</a>
                    <a href="/providers" class="home-hero__nav-link">Become Provider</a>
                    <a href="/about" class="home-hero__nav-link">About</a>
                </div>
                
                ${HeroIllustration()}
            </div>
        </div>
    `;
}
