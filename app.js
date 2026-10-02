// Products
const products = [
    {
        productName: "Classic Candy Pineapple",
        price: 12.00,
        category: "Candy Pineapple",
        inStock: true
    },
    {
        productName: "Tropical Crunch Pineapple",
        price: 16.00,
        category: "Candy Pineapple",
        inStock: true
    },
    {
        productName: "Loaded Candy Pineapple",
        price: 16.00,
        category: "Candy Pineapple",
        inStock: true
    },
    {
        productName: "Classic Lemonade",
        price: 4.00,
        category: "Drinks",
        inStock: true
    },
    {
        productName: "Pineapple Lemonade",
        price: 5.00,
        category: "Drinks",
        inStock: true
    },
    {
        productName: "Soft Drink",
        price: 2.00,
        category: "Drinks",
        inStock: true
    }
];


// Cart
const cart = [];


// Show Products
console.log("Products:", products);


// Add to Cart
function addToCart(productName) {

    // Finds the selected product
    const product = products.find(function(item) {
        return item.productName === productName;
    });

    // Adds the product if it exists and is in stock
    if (product && product.inStock) {
        cart.push(product);

        // Updates the cart count on the webpage
        document.getElementById("cart-count").textContent = cart.length;

        console.log(product.productName + " was added to the cart.");

    } else if (product && !product.inStock) {

        console.log(product.productName + " is out of stock.");

    } else {

        console.log("Product not found.");
    }
}


// View Cart
const viewCart = function() {

    let total = 0;

    // Goes through every product currently in the cart
    cart.forEach(function(item) {
        console.log(item.productName + ": $" + item.price);

        total += item.price;
    });

    console.log("Cart Total: $" + total.toFixed(2));
};


// Filter by Category
const filterByCategory = (category) => {

    // Creates a new array containing products in the selected category
    const matchingProducts = products.filter(function(product) {
        return product.category === category;
    });

    // Displays matching products in the console
    matchingProducts.forEach(function(product) {
        console.log(product.productName + ": $" + product.price);
    });

    // Sends the matching products back
    return matchingProducts;
};


// Render Products
function renderProducts(productsToDisplay) {

    // Finds the product grid in the HTML
    const productGrid = document.getElementById("product-grid");

    // Clears products currently displayed
    productGrid.innerHTML = "";

    // Creates one card for every product
    productsToDisplay.forEach(function(product) {

        // Creates a new div for the product
        const productCard = document.createElement("div");

        // Adds product information
        productCard.innerHTML =
            "<h3>" + product.productName + "</h3>" +
            "<p>Category: " + product.category + "</p>" +
            "<p>Price: $" + product.price.toFixed(2) + "</p>";

        // Creates the Add to Cart button
        const addButton = document.createElement("button");

        addButton.textContent = "Add to Cart";

        // Adds the product when the button is clicked
        addButton.addEventListener("click", function() {
            addToCart(product.productName);
        });

        // Adds the button to the product card
        productCard.appendChild(addButton);

        // Adds the completed card to the webpage
        productGrid.appendChild(productCard);
    });
}
// Today's Pick
function showTodaysPick() {
    const todaysPick = document.getElementById("todays-pick");

    todaysPick.innerHTML =
        "<h2>🍍 Today's Pick</h2>" +
        "<h3>Classic Candy Pineapple</h3>" +
        "<p>We've picked a favorite for you - $12.00</p>";

    // Creates the Today's Pick button
    const pickButton = document.createElement("button");
    pickButton.textContent = "Add Today's Pick";

    // Adds the Classic Candy Pineapple when clicked
    pickButton.addEventListener("click", function() {
        addToCart("Classic Candy Pineapple");
    });

    todaysPick.appendChild(pickButton);
}

// Create Category Filters
function createCategoryFilters() {

    // Finds the category filter area in the HTML
    const filterContainer =
        document.getElementById("category-filters");


    // ALL BUTTON
    const allButton = document.createElement("button");

    allButton.textContent = "All";

    allButton.addEventListener("click", function() {
        renderProducts(products);
    });


    // CANDY PINEAPPLE BUTTON
    const pineappleButton =
        document.createElement("button");

    pineappleButton.textContent = "Candy Pineapple";

    pineappleButton.addEventListener("click", function() {

        const filteredProducts =
            filterByCategory("Candy Pineapple");

        renderProducts(filteredProducts);
    });


    // DRINKS BUTTON
    const drinksButton =
        document.createElement("button");

    drinksButton.textContent = "Drinks";

    drinksButton.addEventListener("click", function() {

        const filteredProducts =
            filterByCategory("Drinks");

        renderProducts(filteredProducts);
    });


    // Adds all three filter buttons to the webpage
    filterContainer.appendChild(allButton);
    filterContainer.appendChild(pineappleButton);
    filterContainer.appendChild(drinksButton);
}


// Displays Today's Pick
showTodaysPick();

// Creates the category filter buttons
createCategoryFilters();

// Displays all 6 products
renderProducts(products);
