let cart = [];

// Función para agregar al carrito
function addToCart(productId, productName, productPrice) {
    const item = { id: productId, name: productName, price: productPrice };
    cart.push(item);
    updateCartUI();
    
    // Feedback visual
    alert(`${productName} agregado al carrito!`);
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
    // Guardar en el navegador por si refresca
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Al cargar la página, recuperar carrito anterior
window.onload = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}