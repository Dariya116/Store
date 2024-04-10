import { useAppSelector } from '../store/redux';
import { InterfaceProduct } from '../type/type';

import { Card } from '../components/Card';

import '../index.scss';

export const Favourites = () => {
  const { favoriteProduct } = useAppSelector((state) => state.favourites);

  const productFavouritesCart = favoriteProduct?.map((product: InterfaceProduct) => {
    return <Card product={product} key={product.id} />;
  });
  return <div className={'content content_favorites'}>{productFavouritesCart}</div>;
};
