import RestaurantSource from '../../../public/data/restaurant-api';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class='hero'>
      <div class="opacity-header"></div>
      <div class="hero-header">
        <h1 tabindex="0">Delish <span>Food.</span></h1>
        <h2 tabindex="0">
          Welcome to Delish Food! Explore Delicious Food from the Best
          Restaurant in Every City!
        </h2>
        <a href="#wrapper-restaurant" class="button button-xl">Let's Explore</a>
      </div>
      </section>
    <h1 tabindex="0">Explore Restaurant</h1>
    <p tabindex="0">Let's see Every Restaurant in Here!!</p>
    <div id="wrapper-restaurant"></div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantSource.getListRestaurant();
      const restaurantContainer = document.querySelector('#wrapper-restaurant');
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
      });
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  },
};

export default Home;
