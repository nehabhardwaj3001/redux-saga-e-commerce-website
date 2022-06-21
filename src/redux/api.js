export function productsFetch() {
    return fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
}

export function productDetailsFetch(id) {
    return fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
}

export function productCategoriesFetch(category) {
    return fetch(`https://fakestoreapi.com/products/categories/${category}`)
    .then(response => response.json())
}