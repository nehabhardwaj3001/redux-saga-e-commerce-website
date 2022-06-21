export function productsFetch() {
	return fetch('http://localhost:7000/addproducts')
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
	return fetch(`http://localhost:7000/register`)
		.then(response => response.json())
}
