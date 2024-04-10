import { useEffect } from 'react';

import { Card } from '../components/Card';
import { InterfaceProduct } from '../type/type';
import { useGetProductsQuery } from '../store/slices/ProductsApi';

import { useActions } from '../store/actions';
import { useAppSelector } from '../store/redux';

import '../index.scss';

export const Home = () => {
  const { setAllProducts } = useActions();
  const { allProducts } = useAppSelector((state) => state.favourites);

  const { isLoading, isError, data } = useGetProductsQuery();

  useEffect(() => {
    if (data) {
      setAllProducts(data);
    }
  }, [data, setAllProducts]);

  const productCart = allProducts?.map((product: InterfaceProduct) => {
    return <Card product={product} key={product.id} />;
  });

  return (
    <div className="content">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching </p>}
      {productCart}
    </div>
  );
};
