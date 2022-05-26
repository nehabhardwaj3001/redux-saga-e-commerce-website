import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProductCategoryFetch} from '../redux/action';
import { useParams } from 'react-router-dom';


const Categories = () => {
	const params = useParams();
	const categories = useSelector(state => state.productsReducer.categories);
	const dispatch = useDispatch();
console.log("category", categories)
	useEffect(() => {
    dispatch(getProductCategoryFetch(params.category))
  }, [params.category]);

  return (
    <div>
        {categories.title}
    </div>
  )
}

export default Categories;
