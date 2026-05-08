// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Header Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // 2. Simple Cart Counter Logic
    let cartCount = 0;
    const cartLink = document.querySelector('.user-nav a:last-child');
    
    // Function to simulate adding items (can be linked to buttons later)
    window.addToCart = () => {
        cartCount++;
        cartLink.innerText = `Shopping bag (${cartCount})`;
        alert('Item added to your bag!');
    };

    // 3. Log confirmation
    console.log("H&M Framework Initialized: Interactivity Active.");
});
