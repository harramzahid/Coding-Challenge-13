// Task 2  Fetch Products from the API Using Fetch and Promises
// Our API link, where all the goods are coming from
const apiURL = 'https://www.course-api.com/javascript-store-products';

// Fetching the products from the API, let's hope it works 😅
fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch products'); // Uh oh, something went wrong
    }
    return response.json(); // Getting JSON
  })
  .then(data => {
    displayProducts(data); // Now we show the stuff on the page
  })
  

//Task 3 Display Product Details Dynamically
// Function to handle all the product display stuff
function displayProducts(products) {
    const productContainer = document.getElementById('product-menu'); // Where we'll put the products
    productContainer.innerHTML = ''; // Clear it just in case there's old stuff
  
    products.forEach(product => {
      // Let's grab all the details we need
      const { company, name, price } = product.fields;
      const { url: imageUrl } = product.fields.image[0]; // Image is a little nested, but no worries
  
      // Creating a new product card element
      const productCard = document.createElement('div');
      productCard.classList.add('product-card'); // Giving it a class to style later
  
      // Putting everything inside the card
      productCard.innerHTML = `
        <img src="${imageUrl}" alt="${name}" class="product-image" />
        <h2 class="product-name">${name}</h2>
        <p class="product-company">by ${company}</p>
        <p class="product-price">$${(price / 100).toFixed(2)}</p>
      `;
  
      // And finally, we slap it on the page
      productContainer.appendChild(productCard);
    });
  }

// Task 4 Handle Errors Gracefully
 .catch(error => {
    // If things go south, show an error message
    document.getElementById('product-menu').innerHTML = `<p class="error">Failed to load products. Please try again later.</p>`;
    console.error('Error fetching products:', error); // At least we know what happened
  });

  