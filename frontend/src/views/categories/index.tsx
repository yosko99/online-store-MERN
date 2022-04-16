import React, { FC, useEffect } from 'react';

import { useParams, Navigate } from 'react-router-dom';

import Loading from '../../components/loading/Loading';
import useFetch from '../../hooks/useFetch';
import RenderCategoryProducts from './RenderCategoryProducts';

const CategoryProductsPage: FC = () => {
  const { category } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const {
    isLoading,
    error,
    data: categoryProducts
  } = useFetch(category!, `/api/products/category/${category}`);

  if (isLoading) {
    return <Loading height='90vh'/>;
  }

  return (
		<>
		{error !== undefined
		  ? <Navigate to="/404" state={{ error: error.message }} />
		  : <RenderCategoryProducts
					categoryProducts={categoryProducts}
					isLoading={isLoading}
			/>
		}
		</>
  );
};

export default CategoryProductsPage;
