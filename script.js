// ==================== Cart Management ==================== 
let cartCount = 0;
const FEEDBACK_DURATION = 1500;

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('VIUL Mobile-Optimized Fashion Store Initialized');
    setupEventListeners();
}

/**
 * Setup event listeners for interactive elements
 */
function setupEventListeners() {
    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });

    // Category filters
    const categoryItems = document.querySelectorAll('.cat-circle');
    categoryItems.forEach(item => {
        item.addEventListener('click', handleCategoryFilter);
    });

    // Mobile navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', handleNavigation);
    });

    // Menu toggle
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', handleMenuToggle);
    }
}

/**
 * Handle add to cart functionality
 * @param {Event} event - Click event from add to cart button
 */
function handleAddToCart(event) {
    const button = event.target;
    const productId = button.getAttribute('data-product-id');

    // Increment cart count
    cartCount++;
    updateCartDisplay();

    // Provide visual feedback
    showButtonFeedback(button);

    // Log action
    console.log(`Product added to cart: ID ${productId}`);
}

/**
 * Update cart count display
 */
function updateCartDisplay() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.innerText = cartCount;
    }
}

/**
 * Show button feedback after adding to cart
 * @param {HTMLElement} button - The button element
 */
function showButtonFeedback(button) {
    const originalText = button.innerText;
    const originalClass = button.className;

    // Update button state
    button.innerText = '✓ ADDED!';
    button.classList.add('success');
    button.disabled = true;

    // Reset after delay
    setTimeout(() => {
        button.innerText = originalText;
        button.className = originalClass;
        button.disabled = false;
    }, FEEDBACK_DURATION);
}

/**
 * Handle category filter click
 * @param {Event} event - Click event from category item
 */
function handleCategoryFilter(event) {
    const category = event.currentTarget.getAttribute('data-category');
    console.log(`Filtering by category: ${category}`);
    // Future implementation: filter products by category
}

/**
 * Handle mobile navigation click
 * @param {Event} event - Click event from nav item
 */
function handleNavigation(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    console.log(`Navigating to: ${href}`);
    // Future implementation: handle navigation
}

/**
 * Handle menu toggle
 * @param {Event} event - Click event from menu button
 */
function handleMenuToggle(event) {
    const button = event.currentTarget;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);
    console.log(`Menu ${!isExpanded ? 'opened' : 'closed'}`);
    // Future implementation: show/hide menu
}

/**
 * Handle sort/filter changes
 */
function handleSortChange() {
    const sortSelect = document.querySelector('select[aria-label="Sort products by"]');
    if (sortSelect) {
        sortSelect.addEventListener('change', (event) => {
            const sortValue = event.target.value;
            console.log(`Products sorted by: ${sortValue}`);
            // Future implementation: sort products
        });
    }
}

// ==================== Utility Functions ====================

/**
 * Get cart count
 * @returns {number} Current cart count
 */
function getCartCount() {
    return cartCount;
}

/**
 * Reset cart count
 */
function resetCart() {
    cartCount = 0;
    updateCartDisplay();
    console.log('Cart has been reset');
}

// ==================== Initialize on DOM Ready ====================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}