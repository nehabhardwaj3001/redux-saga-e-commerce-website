import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../redux/actions/productAction';
import './styles/NewProduct.css';

const NewProduct = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
// 	const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
const [productDetail, setProductDetail] = useState({ name: "", price: "", description: "", category: ""});

	const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

// 	useEffect(() => {
//       alert("Product Created Successfully");
//       history.push("/admin/dashboard");
//       dispatch({ type: NEW_PRODUCT_FETCH });
//   });

  const productSubmitHandler = (e) => {
	e.preventDefault();
	dispatch(addProduct(productDetail));   
	navigate("/home")
}

	return (
		<div className='newProductContainer'>
			<form className="createProductForm" onSubmit={productSubmitHandler}>
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

					{/* <div id="createProductFormFile">
						<input
							type="file"
							name="avatar"
							accept="image/*"
							onChange={createProductImagesChange}
							multiple
						/>
           </div> */}

					 {/* <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div> */}

						<button
							id="createProductBtn"
							type="submit"
							// disabled={loading ? true : false}
								>
							Create
            </button>

			</form>
		</div>
	)
}

export default NewProduct;
