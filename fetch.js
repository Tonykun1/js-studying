document.addEventListener("DOMContentLoaded", () => {
  const productsList = document.getElementById("products");

  if (!productsList) {
    console.error("Error: Element with ID 'product' not found.");
    return;
  }

  fetch("https://dummyjson.com/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      data.products.forEach((product) => {
        const productContainer = document.createElement("div");
        productContainer.classList.add("product");

        const title = document.createElement("h2");
        title.textContent = product.title;

        const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        const category = document.createElement("p");
        category.textContent = `Category: ${product.category}`;

        const image = document.createElement("img");
        image.src = product.thumbnail; // Ensure correct property name
        image.alt = product.title;

        productContainer.appendChild(image);
        productContainer.appendChild(title);
        productContainer.appendChild(price);
        productContainer.appendChild(category);

        productsList.appendChild(productContainer);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Failed to load products. Please try again later.";
      productsList.appendChild(errorMessage);
    });
});
