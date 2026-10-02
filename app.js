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
        price: 20.00,
        category: "Candy Pineapple",
        inStock: true
    },
    {
        productName: "Strawberry Lemonade",
        price: 6.00,
        category: "Drinks",
        inStock: false
    }
];

// Cart
const cart = [];

// Show Products
console.log("Products:", products);


// Add to Cart
function addToCart(productName) {
    const product = products.find(function(item) {
        return item.productName === productName;
    });

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

    cart.forEach(function(item) {
        console.log(item.productName + ": $" + item.price);
        total += item.price;
    });

    console.log("Cart Total: $" + total.toFixed(2));
};


// Filter by Category
const filterByCategory = (category) => {
    const matchingProducts = products.filter(function(product) {
        return product.category === category;
    });

    matchingProducts.forEach(function(product) {
        console.log(product.productName + ": $" + product.price);
    });

    return matchingProducts;
};


// Render Products
function renderProducts(productsToDisplay) {
    const productGrid = document.getElementById("product-grid");

    // Clears the current products from the webpage
    productGrid.innerHTML = "";

    // Goes through the array and creates a card for each product
    productsToDisplay.forEach(function(product) {

        // Creates the product card
        const productCard = document.createElement("div");

        // Adds the product information to the card
        productCard.innerHTML =
            "<h3>" + product.productName + "</h3>" +
            "<p>Category: " + product.category + "</p>" +
            "<p>Price: $" + product.price.toFixed(2) + "</p>";

        // Creates an Add to Cart button
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";

        // Runs addToCart when the button is clicked
        addButton.addEventListener("click", function() {
            addToCart(product.productName);
        });

        // Adds the button to the product card
        productCard.appendChild(addButton);

        // Adds the completed card to the webpage
        productGrid.appendChild(productCard);
    });
}


// Displays all products when the page first loads
renderProducts(products);
