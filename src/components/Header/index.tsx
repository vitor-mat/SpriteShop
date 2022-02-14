import './style.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useMediaQuery from '@mui/material/useMediaQuery';

import LongMenu from './LongMenu';

export const Header = () => {

  const isActive = useMediaQuery("(max-width: 530px)")

  return(
    <header>
      <h1>SpriteShop</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Mensagens</li>
        </ul>
        {
          isActive ? (
            <LongMenu />
          ) : (
            <ShoppingCartIcon
            sx={{ color: "white", fontSize: 40, cursor: 'pointer' }}
          />
          )
        }
      </nav>
    </header>
  )
}