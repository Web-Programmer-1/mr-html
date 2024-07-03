document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
  
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
  
        const existingItem = cartItems.find(item => item.id === id);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          cartItems.push({ id, name, price, quantity: 1 });
        }
        updateCart();
      });
    });
  
    const updateCart = () => {
      cartItemsList.innerHTML = '';
      let totalPrice = 0;
  
      cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(li);
  
        totalPrice += item.price * item.quantity;
      });
  
      totalPriceElement.textContent = totalPrice.toFixed(2);
    };
  });
  