import { useSelector } from 'react-redux';

import { CartCard } from '../../components/CartCard/index';
import './style.css';

import { RootState } from '../../app/store';

export const MyCart = () => {

  const cartProducts = useSelector((state: RootState) => state.cartProducts.value)


  return (
    <main className="cart-items-container">
      <h1>Carrinho:</h1>
      {cartProducts.map((value: any, index: number) => {
        return(
          <CartCard key={value.id} title={value.title} price={value.price} index={index}/>
        )
      })}
    </main>
  )
}