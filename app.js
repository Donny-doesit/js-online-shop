
import { products } from "./products.js";
import { cart, addToCart, viewCart } from "./cart.js";

// ~ Update the cart counter displayed in the header.
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// ~ Add a selected product and display feedback to the customer.
function handleAddToCart(productName) {
    const message = document.getElementById("error-message");

    try {
        const product = addToCart(productName);
        message.textContent = "";
        console.log(product.productName + " added to cart.");

    } catch (error) {
        message.textContent = error.message;

    } finally {
        updateCartCount();
    }
}

// ~ Build the product cards using the selected products.
function renderProducts(productsToDisplay) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";

    productsToDisplay.forEach(function(product) {
        const productCard = document.createElement("div");

        productCard.innerHTML =
            "<h3>" + product.productName + "</h3>" +
            "<p>Category: " + product.category + "</p>" +
            "<p>Price: $" + product.price.toFixed(2) + "</p>";

        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";

        addButton.addEventListener("click", function() {
            handleAddToCart(product.productName);
        });

        productCard.appendChild(addButton);
        productGrid.appendChild(productCard);
    });
}

// ~ Filter the store's products by category.
function filterByCategory(category) {
    return products.filter(function(product) {
        return product.category === category;
    });
}

// ~ Create buttons for browsing the product categories.
function createCategoryFilters() {
    const filterContainer = document.getElementById("category-filters");
    filterContainer.innerHTML = "";

    const categories = ["All", "Candy Pineapple", "Drinks"];

    categories.forEach(function(category) {
        const button = document.createElement("button");
        button.textContent = category;

        button.addEventListener("click", function() {
            if (category === "All") {
                renderProducts(products);
            } else {
                renderProducts(filterByCategory(category));
            }
        });

        filterContainer.appendChild(button);
    });
}

// ~ Display the store's featured pineapple.
function showTodaysPick() {
    const todaysPick = document.getElementById("todays-pick");

    todaysPick.innerHTML =
        "<h2>🍍 Today's Pick</h2>" +
        "<h3>Classic Candy Pineapple</h3>" +
        "<p>We've picked a favorite for you - $12.00</p>";

    const pickButton = document.createElement("button");
    pickButton.textContent = "Add Today's Pick";

    pickButton.addEventListener("click", function() {
        handleAddToCart("Classic Candy Pineapple");
    });

    todaysPick.appendChild(pickButton);
}

// ~ Start the storefront.
createCategoryFilters();
showTodaysPick();
renderProducts(products);
updateCartCount();
