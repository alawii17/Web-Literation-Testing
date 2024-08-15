import FavoriteRestaurantIdb from '../../../public/data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <h1 tabindex="0">Favorite Restaurant</h1>
      <div id="wrapper-restaurant-favorite"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#wrapper-restaurant-favorite');

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<div class="restaurant-item_not_found"><h1>Tidak ada restoran yang disukai</h1></div>';
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
