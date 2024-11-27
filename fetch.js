const productsList=document.getElementById("products");

fetch('https://dummyjson.com/products')
  .then((response) => response.json())
  .then((data) => {
    data.products.forEach((product) => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product'); 

      const title = document.createElement('h2');
      title.textContent = product.title;

      const price = document.createElement('p');
      price.textContent = `Price: $${product.price}`;

      const category = document.createElement('p');
      category.textContent = `Category: ${product.category}`;

      const image = document.createElement('img');
      image.src = product.thumbnail;
      image.alt = product.title;

      productContainer.appendChild(image);
      productContainer.appendChild(title);
      productContainer.appendChild(price);
      productContainer.appendChild(category);

      productsList.appendChild(productContainer);
    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });