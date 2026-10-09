
import { products } from "./products.js";

export const cart = [];

export function addToCart(productName) {
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

    cart.push(product);
    return product;
}

export function viewCart() {
    let total = 0;

    cart.forEach(function(item) {
        total += item.price;
    });

    return total;
}
