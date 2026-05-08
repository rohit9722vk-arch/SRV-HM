document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const logo = document.querySelector('.brand-logo');
    const cartBtn = document.getElementById('cart-btn');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const searchInput = document.getElementById('search-input');
    const toastNotification = document.getElementById('toast-notification');
    const newsletterForm = document.getElementById('newsletter-form');

    let cartItems = [];
    let cartCount = 0;

    // ========== SCROLL EFFECT: SHRINK HEADER ==========
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ========== MOBILE MENU TOGGLE ==========
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // ========== CART SYSTEM WITH LOCAL STORAGE ==========
    window.addToCart = (productName, price) => {
        cartItems.push({ name: productName, price: price });
        cartCount++;
        updateCart();
        showToast(`✓ ${productName} added to cart!`);
    };

    function updateCart() {
        document.getElementById('cart-count').textContent = cartCount;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        cartBtn.style.color = '#777';
        setTimeout(() => {
            cartBtn.style.color = '#1a1a1a';
        }, 300);
    }

    // Load cart from localStorage on page load
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
        cartCount = cartItems.length;
        document.getElementById('cart-count').textContent = cartCount;
    }

    // ========== SEARCH/FILTER FUNCTIONALITY ==========
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const productName = card.querySelector('h4').textContent.toLowerCase();
            if (productName.includes(query)) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });

        if (query === '') {
            productCards.forEach(card => {
                card.style.display = 'block';
            });
        }
    });

    // ========== SMOOTH SCROLL TO PRODUCTS ==========
    window.scrollToProducts = () => {
        const productsSection = document.getElementById('products-section');
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // ========== NEWSLETTER FORM HANDLING ==========
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        if (validateEmail(email)) {
            showToast(`✓ Welcome to VIUL! Check ${email} for exclusive offers.`);
            newsletterForm.reset();
            localStorage.setItem('subscribedEmail', email);
        } else {
            showToast('✗ Please enter a valid email address');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // ========== TOAST NOTIFICATION SYSTEM ==========
    function showToast(message) {
        toastNotification.textContent = message;
        toastNotification.classList.add('show');

        setTimeout(() => {
            toastNotification.classList.remove('show');
        }, 3000);
    }

    // ========== ACTIVE NAVIGATION LINK ==========
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks[0].classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // ========== SIGN IN CLICK HANDLER ==========
    document.querySelector('.user-nav a').addEventListener('click', () => {
        showToast('✓ Sign In feature coming soon!');
    });

    // ========== WISHLIST CLICK HANDLER ==========
    document.querySelectorAll('.user-nav a')[1].addEventListener('click', () => {
        showToast('❤ Added to Wishlist!');
    });

    // ========== CONSOLE LOGGING ==========
    console.log('%cVIUL Brand Framework Loaded', 'font-size: 14px; color: #000; font-weight: bold;');
    console.log('%cPremium Fashion & Lifestyle', 'font-size: 12px; color: #666;');
    console.log('%cCart System:', 'font-weight: bold;', `${cartCount} items`);
    console.log('%cVersion:', 'font-weight: bold;', '2.0 - Enhanced');

    // ========== PAGE LOAD ANIMATION ==========
    document.body.style.animation = 'fadeIn 0.6s ease';

});

// ========== ADD FADE-IN ANIMATION ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
