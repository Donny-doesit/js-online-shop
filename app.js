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
};
// Function Calls
addToCart("Classic Candy Pineapple");
addToCart("Strawberry Lemonade");
addToCart("Not a Product");

viewCart();

filterByCategory("Candy Pineapple");
