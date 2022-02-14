import { CartCard } from '../../components/CartCard/index';
import './style.css';

export const MyCart = () => {
  return (
    <main className="cart-items-container">
      <h1>Carrinho:</h1>
      <CartCard title="ninja" price="0.99" amount="01" />
    </main>
  )
}