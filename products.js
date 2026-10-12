
export async function loadProducts() {
    try {
        // ~ Request product data from the DummyJSON API.
        const response = await fetch("https://dummyjson.com/products");

        // ~ Throw an error if the request is unsuccessful.
        if (!response.ok) {
            throw new Error("Unable to retrieve products.");
        }

        // ~ Convert the API response into JavaScript data.
        const data = await response.json();

        // ~ Match the API fields to our existing Online Shop code.
        return data.products.map(function(product) {
            return {
                id: product.id,
                productName: product.title,
                price: product.price,
                category: product.category,
                inStock: product.stock > 0,
                thumbnail: product.thumbnail
            };
        });

    } catch (error) {
        // ~ Report the problem without crashing the application.
        console.error("Product loading error:", error);

        // ~ Return an empty array so the storefront can still run.
        return [];
    }
}
