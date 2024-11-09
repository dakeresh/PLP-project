document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Shopping cart functionality
    let cart = [];
    const products = [
        { id: 1, name: 'Watch 1', price: 199.99 },
        { id: 2, name: 'Watch 2', price: 299.99 },
        { id: 3, name: 'Watch 3', price: 399.99 },
   








