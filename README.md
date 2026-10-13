# Donald's Online Shop

### JavaScript Final Project | CST310 – Software Development

Donald's Online Shop is an interactive shopping website developed using HTML and JavaScript. The project began as a small candy pineapple storefront and expanded throughout the course to demonstrate JavaScript functions, arrays, DOM manipulation, asynchronous programming, API integration, and CRUD operations.

The final version retrieves product information from the DummyJSON API and allows customers to browse products, filter categories, and manage a shopping cart.

## Live Website

[Visit Donald's Online Shop](https://donny-doesit.github.io/js-online-shop/)

## Features

- **Live Product Data:** Retrieves product information using the Fetch API.
- **Category Filtering:** Allows customers to browse products by category.
- **Today's Pick:** Highlights an available product from the API.
- **Add to Cart:** Adds selected products to the shopping cart.
- **Quantity Management:** Increases the quantity when the same product is added again.
- **Remove from Cart:** Removes selected products from the cart.
- **Running Total:** Automatically calculates the total cost of items in the cart.
- **Error Handling:** Uses `try...catch` to manage product-loading and cart errors.
- **Dynamic Updates:** Updates the shopping cart without refreshing the page.

## Technologies Used

- HTML5
- JavaScript (ES6 modules)
- Document Object Model (DOM)
- Fetch API
- Async/Await and Promises
- Git and GitHub
- GitHub Pages

## API Integration

The application retrieves product information from:
a mock source

The `loadProducts()` function uses `fetch()` to request product data. The response is converted into JavaScript objects using `response.json()` and organized with `map()`.

The application uses `async/await` to wait for the data before displaying the products. If the request fails, error handling prevents the application from crashing and returns an empty array.

## CRUD Operations

| Operation | Function | Description |
|---|---|---|
| Create | `addToCart()` | Adds a new product with quantity 1 |
| Read | `viewCart()` | Calculates the current cart total |
| Update | `addToCart()` | Increases the quantity of an existing item |
| Delete | `removeFromCart()` | Removes a selected item from the cart |

The shopping cart updates immediately after each operation.

## Project Files

| File | Purpose |
|---|---|
| `index.html` | Defines the website structure and shopping cart section |
| `app.js` | Handles product rendering, category filters, and browser interactions |
| `products.js` | Retrieves and prepares product data from DummyJSON |
| `cart.js` | Contains the shopping cart CRUD functions |
| `README.md` | Documents the project |

## Running the Project

1. Clone or download this repository.
2. Open the project folder in a code editor.
3. Run `index.html` using a local development server, such as VS Code Live Server, or open the published GitHub Pages website.
4. Browse products and test the shopping cart functionality.

An internet connection is required to retrieve products from DummyJSON.

## Testing

The following shopping cart operations were manually tested:

- Adding different products to the cart.
- Adding the same product multiple times.
- Increasing product quantities without duplicate entries.
- Removing products from the cart.
- Updating the running total.
- Checking the browser console for errors.

## Future Improvements

Possible improvements include a more responsive storefront layout, a checkout process, saving cart contents between sessions, and restoring the original candy pineapple inventory through a dedicated product API.

## Developer

**Donald Jackson Jr.**

University of Arizona Global Campus

CST310 – Software Development

October 2026

## Project Purpose

This project was created for educational purposes to demonstrate the use of JavaScript in an interactive web application. The focus is on connecting external data to a website and managing user interactions through CRUD operations.
