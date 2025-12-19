// Search Input Component (React-style bit)
export function SearchInput({ placeholder, icon = '📍' }) {
    return `
        <div class="search-input">
            <span class="search-input__icon">${icon}</span>
            <input type="text" class="search-input__field" placeholder="${placeholder}" />
        </div>
    `;
}

