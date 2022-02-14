import './style.css';

import ninja from '../../assets/images/ninja.jpg';
import slime from '../../assets/images/slime.jpg';
import dino from '../../assets/images/dino.jpg';
import bugRock from '../../assets/images/bugRock.jpg';

import { SpriteCard } from '../../components/SpriteCard/index';

export const Home = () => {
  return(
    <main className="cards-container-home">
      <SpriteCard title="Ninja" imgSrc={ninja} price="0.99" />
      <SpriteCard title="Slime" imgSrc={slime} price="0.99" />
      <SpriteCard title="Dino" imgSrc={dino} price="0.99" />
      <SpriteCard title="Bug Rock" imgSrc={bugRock} price="0.99" />
    </main>
  )
}