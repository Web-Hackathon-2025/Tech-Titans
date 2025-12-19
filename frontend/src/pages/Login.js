export function Login() {
    return `
        <div class="auth-page">
            <div class="auth-container">
                <!-- Left Side: Brand & Illustration -->
                <div class="auth-left">
                    <div class="auth-brand">
                        <div class="brand-logo">🔧</div>
                        <h1>Karigar</h1>
                    </div>
                    <div class="auth-tagline">
                        <h2>Connect with Local Experts</h2>
                        <p>Trusted professionals, just a tap away</p>
                    </div>
                    <div class="auth-features">
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Verified Service Providers</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Fast & Reliable Services</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Secure Transactions</span>
                        </div>
                    </div>
                </div>

                <!-- Right Side: Auth Forms -->
                <div class="auth-right">
                    <!-- Tab Toggle -->
                    <div class="auth-tabs">
                        <button class="auth-tab active" data-tab="login">
                            <span>Login</span>
                        </button>
                        <button class="auth-tab" data-tab="signup">
                            <span>Sign Up</span>
                        </button>
                    </div>

                    <!-- Login Form -->
                    <form id="login-form" class="auth-form active" data-form="login">
                        <div class="form-group">
                            <input 
                                type="email" 
                                id="login-email" 
                                class="form-input" 
                                placeholder=" "
                                required
                            >
                            <label for="login-email" class="form-label">
                                <span class="label-icon">📧</span>
                                <span>Email Address</span>
                            </label>
                            <span class="form-error"></span>
                        </div>

                        <div class="form-group">
                            <input 
                                type="password" 
                                id="login-password" 
                                class="form-input" 
                                placeholder=" "
                                required
                            >
                            <label for="login-password" class="form-label">
                                <span class="label-icon">🔐</span>
                                <span>Password</span>
                            </label>
                            <button type="button" class="password-toggle" data-target="login-password">
                                👁️
                            </button>
                            <span class="form-error"></span>
                        </div>

                        <div class="form-options">
                            <label class="checkbox-label">
                                <input type="checkbox" class="form-checkbox">
                                <span>Remember me</span>
                            </label>
                            <a href="#" class="forgot-password">Forgot Password?</a>
                        </div>

                        <button type="submit" class="auth-btn">
                            <span>Login to Karigar</span>
                            <span class="btn-arrow">→</span>
                        </button>
                    </form>

                    <!-- Signup Form -->
                    <form id="signup-form" class="auth-form" data-form="signup">
                        <!-- Role Selection -->
                        <div class="role-selection">
                            <p class="role-label">I am a</p>
                            <div class="role-buttons">
                                <button type="button" class="role-btn active" data-role="customer">
                                    <span class="role-icon">👤</span>
                                    <span>Customer</span>
                                </button>
                                <button type="button" class="role-btn" data-role="provider">
                                    <span class="role-icon">🔧</span>
                                    <span>Service Provider</span>
                                </button>
                            </div>
                            <input type="hidden" id="signup-role" value="customer" required>
                        </div>

                        <div class="form-group">
                            <input 
                                type="text" 
                                id="signup-name" 
                                class="form-input" 
                                placeholder=" "
                                required
                            >
                            <label for="signup-name" class="form-label">
                                <span class="label-icon">👤</span>
                                <span>Full Name</span>
                            </label>
                            <span class="form-error"></span>
                        </div>

                        <div class="form-group">
                            <input 
                                type="email" 
                                id="signup-email" 
                                class="form-input" 
                                placeholder=" "
                                required
                            >
                            <label for="signup-email" class="form-label">
                                <span class="label-icon">📧</span>
                                <span>Email Address</span>
                            </label>
                            <span class="form-error"></span>
                        </div>

                        <div class="form-group">
                            <input 
                                type="tel" 
                                id="signup-phone" 
                                class="form-input" 
                                placeholder=" "
                                required
                            >
                            <label for="signup-phone" class="form-label">
                                <span class="label-icon">📱</span>
                                <span>Phone Number</span>
                            </label>
                            <span class="form-error"></span>
                        </div>

                        <div class="form-group">
                            <input 
                                type="password" 
                                id="signup-password" 
                                class="form-input" 
                                placeholder=" "
                                required
                            >
                            <label for="signup-password" class="form-label">
                                <span class="label-icon">🔐</span>
                                <span>Password</span>
                            </label>
                            <button type="button" class="password-toggle" data-target="signup-password">
                                👁️
                            </button>
                            <span class="form-error"></span>
                            <div class="password-strength">
                                <div class="strength-bar"></div>
                                <span class="strength-text"></span>
                            </div>
                        </div>

                        <div class="form-options">
                            <label class="checkbox-label">
                                <input type="checkbox" class="form-checkbox" required>
                                <span>I agree to Terms & Conditions</span>
                            </label>
                        </div>

                        <button type="submit" class="auth-btn">
                            <span>Create Account</span>
                            <span class="btn-arrow">→</span>
                        </button>
                    </form>
                </div>
            </div>

            <!-- Success Modal -->
            <div id="success-modal" class="modal">
                <div class="modal-content">
                    <div class="modal-icon">✓</div>
                    <h2>Welcome to Karigar!</h2>
                    <p id="modal-message"></p>
                    <button class="modal-btn">Got it</button>
                </div>
            </div>
        </div>
    `;
}

// Initialize auth page functionality
export function initLogin() {
    setupAuthTabs();
    setupRoleSelection();
    setupPasswordToggles();
    setupFormValidation();
    setupFormSubmission();
}

function setupAuthTabs() {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            
            // Remove active from all
            tabs.forEach(t => t.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));
            
            // Add active to clicked tab
            tab.classList.add('active');
            document.querySelector(`[data-form="${tabName}"]`).classList.add('active');
        });
    });
}

function setupRoleSelection() {
    const roleBtns = document.querySelectorAll('.role-btn');
    const roleInput = document.querySelector('#signup-role');

    roleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            roleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            roleInput.value = btn.dataset.role;
        });
    });
}

function setupPasswordToggles() {
    const toggles = document.querySelectorAll('.password-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = toggle.dataset.target;
            const input = document.querySelector(`#${targetId}`);
            
            if (input.type === 'password') {
                input.type = 'text';
                toggle.textContent = '🙈';
            } else {
                input.type = 'password';
                toggle.textContent = '👁️';
            }
        });
    });
}

function setupFormValidation() {
    const inputs = document.querySelectorAll('.form-input');

    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => validateField(input));
    });

    // Password strength
    const signupPassword = document.querySelector('#signup-password');
    if (signupPassword) {
        signupPassword.addEventListener('input', (e) => {
            updatePasswordStrength(e.target);
        });
    }
}

function validateField(input) {
    const group = input.parentElement;
    const error = group.querySelector('.form-error');
    let isValid = true;
    let message = '';

    if (input.value.trim() === '') {
        isValid = false;
        message = 'This field is required';
    } else if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
            isValid = false;
            message = 'Please enter a valid email';
        }
    } else if (input.type === 'tel') {
        const phoneRegex = /^[0-9\-+\s()]{10,}$/;
        if (!phoneRegex.test(input.value)) {
            isValid = false;
            message = 'Please enter a valid phone number';
        }
    } else if (input.id === 'signup-password') {
        if (input.value.length < 8) {
            isValid = false;
            message = 'Password must be at least 8 characters';
        }
    }

    if (isValid) {
        group.classList.remove('error');
        if (error) error.textContent = '';
    } else {
        group.classList.add('error');
        if (error) error.textContent = message;
    }

    return isValid;
}

function updatePasswordStrength(input) {
    const strength = document.querySelector('.password-strength');
    const bar = strength.querySelector('.strength-bar');
    const text = strength.querySelector('.strength-text');
    
    strength.classList.add('show');
    
    const value = input.value;
    let level = 0;
    let color = '#ff6b6b';
    let label = 'Weak';

    if (value.length >= 8) level = 1;
    if (value.length >= 12 && /[A-Z]/.test(value)) level = 2;
    if (level === 2 && /[0-9]/.test(value) && /[^a-zA-Z0-9]/.test(value)) level = 3;

    if (level === 1) {
        color = '#ffd93d';
        label = 'Fair';
    } else if (level === 2) {
        color = '#6bcf7f';
        label = 'Good';
    } else if (level === 3) {
        color = '#4a90e2';
        label = 'Strong';
    }

    const barAfter = bar.querySelector('::after') || bar;
    bar.style.setProperty('--strength-width', `${(level / 3) * 100}%`);
    const pseudo = window.getComputedStyle(bar, '::after');
    
    bar.innerHTML = `<div style="height:100%; width:${(level / 3) * 100}%; background:${color}; border-radius:2px;"></div>`;
    text.textContent = label;
    text.style.color = color;
}

function setupFormSubmission() {
    const loginForm = document.querySelector('#login-form');
    const signupForm = document.querySelector('#signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.querySelector('#login-email').value;
            const password = document.querySelector('#login-password').value;
            
            // Validate
            let valid = true;
            loginForm.querySelectorAll('.form-input').forEach(input => {
                if (!validateField(input)) valid = false;
            });

            if (!valid) return;

            try {
                const res = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                if (res.ok) {
                    showSuccessModal(`Welcome back! You're now logged in.`);
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 2000);
                } else {
                    alert('Login failed. Please check your credentials.');
                }
            } catch (err) {
                console.error('Login error:', err);
                alert('An error occurred. Please try again.');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.querySelector('#signup-name').value;
            const email = document.querySelector('#signup-email').value;
            const phone = document.querySelector('#signup-phone').value;
            const password = document.querySelector('#signup-password').value;
            const role = document.querySelector('#signup-role').value;
            const terms = signupForm.querySelector('.form-checkbox').checked;

            // Validate all fields
            let valid = true;
            signupForm.querySelectorAll('.form-input').forEach(input => {
                if (!validateField(input)) valid = false;
            });

            if (!terms) {
                alert('Please agree to Terms & Conditions');
                return;
            }

            if (!valid) return;

            try {
                const res = await fetch('/api/auth/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, phone, password, role })
                });

                if (res.ok) {
                    showSuccessModal(`Welcome to Karigar, ${name}! Your account has been created.`);
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 2000);
                } else {
                    alert('Signup failed. Please try again.');
                }
            } catch (err) {
                console.error('Signup error:', err);
                alert('An error occurred. Please try again.');
            }
        });
    }
}

function showSuccessModal(message) {
    const modal = document.querySelector('#success-modal');
    const msgEl = document.querySelector('#modal-message');
    const btn = modal.querySelector('.modal-btn');

    msgEl.textContent = message;
    modal.classList.add('show');

    btn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}

