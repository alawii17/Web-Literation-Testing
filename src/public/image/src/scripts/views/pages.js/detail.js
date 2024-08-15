import '../../../styles/main.css';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../../public/data/restaurant-api';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return ` 
    <div id="likeButtonContainer"></div>
    <div id="restoran" class="restoran"></div>
    <div id="review-container">
    <div id="loading" class="loading-indicator"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parserActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restoran');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });

    const form = document.getElementById('add-review-form');
    const loadingIndicator = document.getElementById('loading');

    const showLoadingIndicator = () => {
      loadingIndicator.style.display = 'block';
    };

    const hideLoadingIndicator = () => {
      loadingIndicator.style.display = 'none';
    };

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const title = formData.get('name');
      const body = formData.get('review');

      const reviewData = {
        id: url.id,
        name: title,
        review: body,
      };

      try {
        showLoadingIndicator();
        await RestaurantSource.addReview(reviewData);
        form.reset();
        alert('Review berhasil ditambahkan');
      } catch (error) {
        console.error('Error creating review:', error);
        alert('Gagal dalam menambahkan review, silahkan coba lagi.');
      } finally {
        setTimeout(() => {
          hideLoadingIndicator();
        }, 2000);
      }

      const renderReviews = () => {
        const reviewContainer = document.getElementById('review-container');
        reviewContainer.innerHTML = '';
        restaurant.customerReviews.forEach(() => {
          const reviewElement = document.createElement('div');
          reviewElement.classList.add('review-item');
          reviewElement.innerHTML = `
          `;
          reviewContainer.appendChild(reviewElement);
        });
      };

      renderReviews();
    });
  },
};

export default Detail;
