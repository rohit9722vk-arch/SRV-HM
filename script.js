let count = 0;

function updateCart() {
    count++;
    document.getElementById('cart-count').innerText = count;
    
    // Simple alert feedback
    const btn = event.target;
    btn.innerText = "ADDED!";
    btn.style.background = "#4CAF50";
    
    setTimeout(() => {
        btn.innerText = "ADD TO CART";
        btn.style.background = "#000";
    }, 1500);
}

// Log for debugging
console.log("VIUL Mobile-Optimized Framework Initialized.");
