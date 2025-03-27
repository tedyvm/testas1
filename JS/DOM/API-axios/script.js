const getStoreProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products/');
      const products = res.data;
      
      const productsContainer = document.querySelector('#products');
      
      // Išvalome konteinerį, kad nesidubliuotų duomenys pakartotinai iškviečiant funkciją
      productsContainer.innerHTML = '';
  
      products.forEach(product => {
        console.log(product);
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
  
        productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.title}" class="product-image">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">$${product.price.toFixed(2)}</p>
          <button class="add-to-cart">Peržiūrėti</button>
        `;
        
        productsContainer.appendChild(productDiv);
      });
  
    } catch (err) {
      console.error('Klaida kraunant produktus:', err);
    }
  }
  
  getStoreProducts();
  