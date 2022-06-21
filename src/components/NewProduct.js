import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../redux/actions/productAction';
import './styles/NewProduct.css';

const NewProduct = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [productDetail, setProductDetail] = useState({ name: "", price: "", description: "", category: "" });

	const categories = [
		"electronics",
		"jewelery",
		"men's clothing",
		"women's clothing",
	];

	const productSubmitHandler = async (e) => {
		e.preventDefault();
		dispatch(addProduct(productDetail));
		navigate("/home")
		// const { name, price, description, category } = productDetail;
		// const res = await fetch('./' , {
		// 	method: 'POST',
		// 	headers:{
		// 		"Content-Type" : "application/json"
		// 	},
		// 	body:JSON.stringify({ name, price, description, category })
		// });
		// const res = await res.json();
		// if(res.status === 422 )  
	}

	return (
		<div className='newProductContainer'>
			<form className="createProductForm" onSubmit={productSubmitHandler} method='POST'>
				<h1>Create Product</h1>

				<div>
					<input
						type="text"
						placeholder="Product Name"
						required
						value={productDetail.name}
						onChange={e => setProductDetail({ ...productDetail, name: e.target.value })}
					/>
				</div>

				<div>
					<input
						type="number"
						placeholder="Price"
						required
						onChange={e => setProductDetail({ ...productDetail, price: e.target.value })}
					/>
				</div>

				<div>
					<textarea
						placeholder="Product Description"
						value={productDetail.description}
						onChange={e => setProductDetail({ ...productDetail, description: e.target.value })}
						cols="30"
						rows="1"
					></textarea>
				</div>

				<div>
					<select
						onChange={e => setProductDetail({ ...productDetail, category: e.target.value })}
					>
						<option value="">Choose Category</option>
						{categories.map((cate) => (
							<option key={cate} value={productDetail.cate}>
								{cate}
							</option>
						))}
					</select>
				</div>

				{/* <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div> */}

				<button
					id="createProductBtn"
					type="submit"
				>
					Create
				</button>

			</form>
		</div>
	)
}

export default NewProduct;
