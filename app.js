
import { loadProducts } from "./products.js";
import { cart, addToCart, removeFromCart, viewCart } from "./cart.js";

// ~ Store products retrieved from the API.
let products = [];

// ~ Update the number of items displayed in the header.
function updateCartCount() {
    const count = cart.reduce(function(total, item) {
        return total + item.quantity;
    }, 0);

    document.getElementById("cart-count").textContent = count;
}

// ~ Add a product and update the cart on the page.
function handleAddToCart(productName) {
    const message = document.getElementById("error-message");

    try {
        addToCart(productName, products);
        message.textContent = "";
        renderCart();
    } catch (error) {
        message.textContent = error.message;
    } finally {
        updateCartCount();
    }
}

// ~ Display all items currently in the cart.
function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartContainer.innerHTML = "";

    cart.forEach(function(item) {
        const cartItem = document.createElement("div");

        const itemText = document.createElement("span");
        itemText.textContent =
            item.productName + " - $" +
            item.price.toFixed(2) +
            " x " + item.quantity;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", function() {
            removeFromCart(item.productName);
            renderCart();
            updateCartCount();
        });

        cartItem.appendChild(itemText);
        cartItem.appendChild(removeButton);
        cartContainer.appendChild(cartItem);
    });

    const total = viewCart();
    cartTotal.textContent = "Cart Total: $" + total.toFixed(2);
}

// ~ Build product cards from API products.
function renderProducts(productsToDisplay) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = "";

    productsToDisplay.forEach(function(product) {
        const productCard = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = product.productName;

        const category = document.createElement("p");
        category.textContent = "Category: " + product.category;

        const price = document.createElement("p");
        price.textContent = "Price: $" + product.price.toFixed(2);

        const image = document.createElement("img");
        image.src = product.thumbnail;
        image.alt = product.productName;
        image.width = 120;

        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.disabled = !product.inStock;

        addButton.addEventListener("click", function() {
            handleAddToCart(product.productName);
        });

        productCard.appendChild(image);
        productCard.appendChild(title);
        productCard.appendChild(category);
        productCard.appendChild(price);
        productCard.appendChild(addButton);

        productGrid.appendChild(productCard);
    });
}

// ~ Filter products by category.
function filterByCategory(category) {
    return products.filter(function(product) {
        return product.category === category;
    });
}

// ~ Build filter buttons from the API categories.
function createCategoryFilters() {
    const filterContainer = document.getElementById("category-filters");
    filterContainer.innerHTML = "";

    const categories = [
        "All",
        ...new Set(products.map(product => product.category))
    ];

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

// ~ Display a featured product from the API.
function showTodaysPick() {
    const todaysPick = document.getElementById("todays-pick");
    todaysPick.innerHTML = "";

    const featured = products.find(product => product.inStock);

    if (!featured) {
        todaysPick.textContent = "No featured product available.";
        return;
    }

    const heading = document.createElement("h2");
    heading.textContent = "Today's Pick";

    const description = document.createElement("p");
    description.textContent =
        featured.productName + " - $" + featured.price.toFixed(2);

    const pickButton = document.createElement("button");
    pickButton.textContent = "Add Today's Pick";

    pickButton.addEventListener("click", function() {
        handleAddToCart(featured.productName);
    });

    todaysPick.appendChild(heading);
    todaysPick.appendChild(description);
    todaysPick.appendChild(pickButton);
}

// ~ Load API products before displaying the storefront.
async function startShop() {
    products = await loadProducts();

    createCategoryFilters();
    showTodaysPick();
    renderProducts(products);
    renderCart();
    updateCartCount();

    if (products.length === 0) {
        document.getElementById("error-message").textContent =
            "Products are unavailable right now. Please try again later.";
    }
}

// ~ Start the application.
startShop();
