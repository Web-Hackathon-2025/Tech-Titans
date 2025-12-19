// Browse Services Page Component
export function Browse() {
    return `
        <div class="browse-page">
            <div class="browse-hero">
                <div class="browse-hero__bg"></div>
                <div class="browse-hero__overlay"></div>
                <div class="browse-hero__content">
                    <h1 class="browse-hero__title">Find Trusted Services</h1>
                    <p class="browse-hero__subtitle">Connect with verified professionals in your area</p>
                </div>
            </div>

            <div class="browse-container">
                <div class="browse-sidebar">
                    <div class="filter-section">
                        <h3 class="filter-title">Category</h3>
                        <div class="filter-buttons">
                            <button class="filter-category-btn active" data-category="">All Services</button>
                            <button class="filter-category-btn" data-category="plumber">🔧 Plumber</button>
                            <button class="filter-category-btn" data-category="electrician">⚡ Electrician</button>
                            <button class="filter-category-btn" data-category="carpenter">🪵 Carpenter</button>
                            <button class="filter-category-btn" data-category="cleaner">🧹 Cleaner</button>
                            <button class="filter-category-btn" data-category="technician">🛠️ Technician</button>
                            <button class="filter-category-btn" data-category="painter">🎨 Painter</button>
                        </div>
                    </div>

                    <div class="filter-section">
                        <h3 class="filter-title">Location</h3>
                        <select class="filter-location">
                            <option value="">All Locations</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Islamabad">Islamabad</option>
                        </select>
                    </div>

                    <div class="filter-section">
                        <h3 class="filter-title">Max Price</h3>
                        <div class="price-range">
                            <input type="range" min="500" max="10000" step="100" value="10000" class="filter-price-slider">
                            <div class="price-display">
                                PKR <span class="filter-price-value">10000</span>
                            </div>
                        </div>
                    </div>

                    <div class="filter-section">
                        <h3 class="filter-title">Rating</h3>
                        <div class="filter-buttons">
                            <button class="filter-rating-btn active" data-rating="0">All</button>
                            <button class="filter-rating-btn" data-rating="4.5">4.5+ ⭐</button>
                            <button class="filter-rating-btn" data-rating="4.7">4.7+ ⭐</button>
                            <button class="filter-rating-btn" data-rating="4.9">4.9+ ⭐</button>
                        </div>
                    </div>

                    <div class="filter-section">
                        <h3 class="filter-title">Availability</h3>
                        <label class="filter-checkbox">
                            <input type="checkbox" class="filter-availability-toggle">
                            <span>Available Now</span>
                        </label>
                    </div>
                </div>

                <div class="browse-main">
                    <div class="section-header">
                        <h2>Available Service Providers</h2>
                        <p>Find the perfect professional for your needs</p>
                    </div>
                    <div id="services-list" class="services-grid"></div>
                </div>
            </div>
        </div>
    `;
}

let allServices = [];

export async function initBrowse() {
    console.log('initBrowse called');
    const root = document.querySelector('#services-list');
    console.log('Root element:', root);
    
    if (!root) {
        console.error('services-list container not found');
        return;
    }
    
    root.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:2rem;color:#666;">Loading services...</div>';
    
    try {
        console.log('Fetching /api/services...');
        const res = await fetch('/api/services');
        console.log('Response:', res);
        
        if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to load services`);
        
        allServices = await res.json();
        console.log('Services loaded:', allServices);
        
        // Initialize filters
        setupFilters();
        
        // Render all services
        renderServices(allServices);
    } catch (err) {
        console.error('Error in initBrowse:', err);
        root.innerHTML = `<div style="grid-column:1/-1;color:#b00020;text-align:center;padding:2rem;">Error: ${err.message}</div>`;
    }
}

function setupFilters() {
    // Category filter
    const categoryFilter = document.querySelectorAll('.filter-category-btn');
    categoryFilter.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryFilter.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilters();
        });
    });

    // Location filter
    const locationSelect = document.querySelector('.filter-location');
    if (locationSelect) {
        locationSelect.addEventListener('change', applyFilters);
    }

    // Price range slider
    const priceSlider = document.querySelector('.filter-price-slider');
    const priceValue = document.querySelector('.filter-price-value');
    if (priceSlider) {
        priceSlider.addEventListener('input', (e) => {
            if (priceValue) priceValue.textContent = `PKR ${e.target.value}`;
            applyFilters();
        });
    }

    // Rating filter
    const ratingBtns = document.querySelectorAll('.filter-rating-btn');
    ratingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            ratingBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilters();
        });
    });

    // Availability toggle
    const availabilityToggle = document.querySelector('.filter-availability-toggle');
    if (availabilityToggle) {
        availabilityToggle.addEventListener('change', applyFilters);
    }
}

function applyFilters() {
    const activeCategory = document.querySelector('.filter-category-btn.active')?.dataset.category;
    const location = document.querySelector('.filter-location')?.value || '';
    const maxPrice = parseFloat(document.querySelector('.filter-price-slider')?.value) || 10000;
    const minRating = parseFloat(document.querySelector('.filter-rating-btn.active')?.dataset.rating) || 0;
    const availableOnly = document.querySelector('.filter-availability-toggle')?.checked || false;

    const filtered = allServices.filter(s => {
        const categoryMatch = !activeCategory || s.category.toLowerCase() === activeCategory.toLowerCase();
        const locationMatch = !location || s.city.toLowerCase() === location.toLowerCase();
        const priceMatch = !s.price || parseInt(s.price.replace(/\D/g, '')) <= maxPrice;
        const ratingMatch = (s.rating || 4.5) >= minRating;
        const availabilityMatch = !availableOnly || s.available !== false;

        return categoryMatch && locationMatch && priceMatch && ratingMatch && availabilityMatch;
    });

    renderServices(filtered);
}

function renderServices(services) {
    const root = document.querySelector('#services-list');
    if (!root) return;

    if (services.length === 0) {
        root.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:2rem;color:#999;">No services found. Try adjusting your filters.</div>';
        return;
    }

    root.innerHTML = services.map(s => `
        <div class="service-card">
            <div class="service-card__badge-top">
                <span class="badge-availability">${s.available !== false ? '✓ Available' : 'Unavailable'}</span>
            </div>
            <div class="service-card__header">
                <div class="service-card__title">${s.title}</div>
                <div class="service-card__rating">
                    <span class="rating-star">⭐</span>
                    <span class="rating-value">${(s.rating || 4.5).toFixed(1)}</span>
                </div>
            </div>
            <div class="service-card__body">
                <div class="service-card__meta">
                    <span class="badge badge-category">${s.category}</span>
                    <span class="badge badge-location">📍 ${s.city}</span>
                </div>
                <div class="service-card__price">
                    <span class="price-label">From</span>
                    <span class="price-amount">${s.price || 'On request'}</span>
                </div>
            </div>
            <button class="btn btn-book">
                <span class="btn-text">Book Now</span>
                <span class="btn-arrow">→</span>
            </button>
        </div>
    `).join('');
}

