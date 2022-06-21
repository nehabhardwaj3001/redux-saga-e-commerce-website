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

// export function addNewProduct() {
//     return fetch('https://fakestoreapi.com/products',{
//         method:"POST",
//         body:JSON.stringify(
//             {
//                 title: 'test product',
//                 price: 13.5,
//                 description: 'lorem ipsum set',
//                 image: 'https://i.pravatar.cc',
//                 category: 'electronic'
//             }
//         )
//     })
//         .then(res=>res.json())
//         .then(json=>console.log(json))
// }