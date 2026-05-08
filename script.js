document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const cartBtn = document.getElementById('cart-btn');
    let count = 0;

    // 1. Shrink Header on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '10px 50px';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '20px 50px';
            header.style.boxShadow = 'none';
        }
    });

    // 2. Add to Cart Functionality
    window.addToCart = () => {
        count++;
        cartBtn.innerText = `Shopping bag (${count})`;
        
        // Visual feedback
        cartBtn.style.color = '#E5001C';
        setTimeout(() => {
            cartBtn.style.color = '#222';
        }, 500);
    };

    // 3. Simple Search Interaction
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('focus', () => {
        searchInput.style.width = '200px';
        searchInput.style.transition = 'width 0.4s ease';
    });
});
