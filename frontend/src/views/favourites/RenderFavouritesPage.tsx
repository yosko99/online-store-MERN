import React, { FC } from 'react';

import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

import FreeShippingBar from '../../components/partials/FreeShippingBar';
import MultipleProductCards from '../../components/product/MultipleProductCards';
import useMultipleFetch from '../../hooks/useMultipleFetch';

interface Props {
	likedProductsLocalStorage: string;
}

const RenderFavouritesPage: FC<Props> = ({ likedProductsLocalStorage }) => {
  const parsedLiked = JSON.parse(likedProductsLocalStorage);

  const fetchArr = parsedLiked.map((likedID: string) => {
    return {
      queryKey: `product-${likedID}`,
      link: `/api/products/${likedID}`
    };
  });

  const { isLoading, error, data } = useMultipleFetch(fetchArr);

  return (
		<>
			<FreeShippingBar />
			{error !== undefined
			  ? <Navigate to="/404" state={{ error: error.message }} />
			  : <Container>
					<h2 className='text-center my-3'>My Favourites</h2>
					<MultipleProductCards products={data} isLoading={isLoading} />
				</Container>
			}
		</>
  );
};

export default RenderFavouritesPage;
