// Simple functionality to handle 'Add to Cart' button click
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart');
    });
});
