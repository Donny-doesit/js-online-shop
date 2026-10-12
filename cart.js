
export const cart = [];

// ~ CREATE and UPDATE: Add a product or increase its quantity.
export function addToCart(productName, products) {
    const product = products.find(function(item) {
        return item.productName === productName;
    });

    if (!product) {
        throw new Error("Sorry, we couldn't find that item.");
    }

    if (!product.inStock) {
        throw new Error(
            "Sorry, " + product.productName +
            " is currently sold out. Check back soon!"
        );
    }

    // ~ Check whether this product is already in the cart.
    const existingItem = cart.find(function(item) {
        return item.productName === productName;
    });

    if (existingItem) {
        // ~ UPDATE: Increase quantity instead of adding a duplicate.
        existingItem.quantity += 1;
        return existingItem;
    }

    // ~ CREATE: Add a new cart item with a quantity of 1.
    const cartItem = {
        productName: product.productName,
        price: product.price,
        quantity: 1
    };

    cart.push(cartItem);
    return cartItem;
}

// ~ DELETE: Remove a selected product from the cart.
export function removeFromCart(productName) {
    const index = cart.findIndex(function(item) {
        return item.productName === productName;
    });

    // ~ Only remove the item when a match is found.
    if (index !== -1) {
        cart.splice(index, 1);
    }
}

// ~ READ: Calculate the total using price and quantity.
export function viewCart() {
    let total = 0;

    cart.forEach(function(item) {
        total += item.price * item.quantity;
    });

    return total;
}
