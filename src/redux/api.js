export function productsFetch() {
	return fetch('https://fakestoreapi.com/products')
		.then(response => response.json())
}

export function productDetailsFetch(id) {
	return fetch(`https://fakestoreapi.com/products/${id}`)
		.then(response => response.json())
}

export function productCategoriesFetch(category) {
	return fetch(`https://fakestoreapi.com/products/category/${category}`)
		.then(response => response.json())
}

export function usersFetch() {
	return fetch(`https://fakestoreapi.com/users`)
		.then(response => response.json())
}
