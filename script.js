document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const logo = document.querySelector('.brand-logo');
    const cartBtn = document.getElementById('cart-btn');
    let cartItems = 0;

    // Scroll Effect: Shrink Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.style.padding = '15px 50px';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            logo.style.fontSize = '28px';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '30px 50px';
            header.style.backgroundColor = '#fff';
            logo.style.fontSize = '36px';
            header.style.boxShadow = 'none';
        }
    });

    // Cart Simulation
    window.addToCart = () => {
        cartItems++;
        cartBtn.innerText = `Shopping Bag (${cartItems})`;
        
        // Quick visual feedback
        cartBtn.style.color = '#777';
        setTimeout(() => {
            cartBtn.style.color = '#1a1a1a';
        }, 300);
        
        console.log(`VIUL: Item added. Total items: ${cartItems}`);
    };

    console.log("VIUL Brand Framework Loaded.");
});
