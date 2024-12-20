document.addEventListener('DOMContentLoaded', () => {
    const featuredProductsDiv = document.getElementById('featured-products');
    const productListDiv = document.getElementById('product-list');
  
    // Fetch and display featured products
    fetch('/api/products/featured')
      .then(response => response.json())
      .then(data => {
        data.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.textContent = `${product.name} - $${product.price}`;
          featuredProductsDiv.appendChild(productDiv);
        });
      });
  
    // Fetch and display all products
    fetch('/api/products')
      .then(response => response.json())
      .then(data => {
        data.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.textContent = `${product.name} - $${product.price}`;
          productListDiv.appendChild(productDiv);
        });
      });
  });
  