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
  .catch(error => {
    // If things go south, show an error message
    document.getElementById('product-menu').innerHTML = `<p class="error">Failed to display products. Please retry.</p>`;
    console.error('Error fetching products:', error); // At least we know what happened
  });
