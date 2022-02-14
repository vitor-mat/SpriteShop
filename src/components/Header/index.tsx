import { Link } from 'react-router-dom';

import './style.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useMediaQuery from '@mui/material/useMediaQuery';

import LongMenu from './LongMenu';

export const Header = () => {

  const isActive = useMediaQuery("(max-width: 530px)")

  return (
    <header>
      <h1><Link to="/">SpriteShop</Link></h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/messages">Mensagens</Link></li>
        </ul>
        {
          isActive ? (
            <LongMenu />
          ) : (
            <Link to="my-cart">
              <ShoppingCartIcon
                sx={{ color: "white", fontSize: 40, cursor: 'pointer' }}
              />
            </Link>
          )
        }
      </nav>
    </header>
  )
}