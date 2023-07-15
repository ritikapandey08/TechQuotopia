const addToCartButtons = document.querySelectorAll('.add-to-cart');

const totalPriceElement = document.getElementById('total-price');

let totalPrice = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const price = parseInt(button.getAttribute('data-price'));

        totalPrice += price;

        totalPriceElement.textContent = '₹' + totalPrice;
    });
});
