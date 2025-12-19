// Hero Button Component (React-style bit)
export function HeroButton({ text, arrow = true, variant = 'primary' }) {
    const classes = `btn btn--${variant} hero-button`;
    return `
        <button class="${classes}">
            <span>${text}</span>${arrow ? '<span class="btn__arrow">→</span>' : ''}
        </button>
    `;
}

