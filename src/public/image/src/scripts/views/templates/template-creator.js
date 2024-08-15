import CONFIG from '../../globals/configuration';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="wrapper">
<div tabindex="0" class='restoran_detail_title'><h2>${restaurant.name}</h2></div>
   <img tabindex="0" "corssorigin="anonymous" class="restoran_detail_poster lazyload" 
   data-src="${CONFIG.BASE_IMAGE_URL_LARGE.replace('<pictureId>', restaurant.pictureId)}" 
   alt="${restaurant.name}" title="${restaurant.name}">
<div class="restoran_detai_info">
  <h3 tabindex="0">Information</h3>
  <h4 tabindex="0">Alamat</h4>
  <p tabindex="0">${restaurant.address}</p>
  <h4 tabindex="0">Kota</h4>
  <p tabindex="0">${restaurant.city}</p>
  <div class="restoran_description">
  <h4 tabindex="0">Deskripsi</h4>
  <p tabindex="0">${restaurant.description}</p>
  </div>
  <div class="restoran_detail_menu">
    <div class="restoran_detail_menu_makan">
      <h4 tabindex="0">Menu Makanan</h4>
      <ul>
        ${restaurant.menus.foods.map((foods) => `<li tabindex="0">${foods.name}</li>`).join('')}
      </ul>
    </div>
    <div class="restoran_detail_menu_makan">
      <h4 tabindex="0">Menu Minuman</h4>
      <ul>
        ${restaurant.menus.drinks.map((drinks) => `<li tabindex="0">${drinks.name}</li>`).join('')}
      </ul>
    </div>
  </div>
  <h3>Masukkan Review</h3>
  <form id="add-review-form">
  <div id="review-list">
    <label for="name">Nama:</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div id="review-list">
    <label for="review">Review:</label>
    <textarea id="review" name="review" required></textarea>
  </div>
  <button type="submit">Tambahkan Review</button>
 </form>
  <div class="restoran_detail_review">
    <h3 tabindex="0">Review</h3>
    <ul>
      ${restaurant.customerReviews.map((review) => `
        <li class="restoran_item" tabindex="0">
          <h4>Nama: ${review.name}</h4>
          <p>Review: ${review.review}</p>
          <p>Date: ${review.date}</p>
        </li>
      `).join('')}
    </ul>
  </div>
</div>
</div>
`;

const createRestaurantListTemplate = (restaurant) => `
        <div class="restoran_list" id="restoran_list">
            <img tabindex="0" crossorigin="anonymous" class="restoran_list_img lazyload" 
            data-src="${CONFIG.BASE_IMAGE_URL.replace('<pictureId>', restaurant.pictureId)}" 
            alt="${restaurant.name}" title="${restaurant.name}">
          <div class="restoran_list_content">
          <div tabindex="0" class="restoran_city">${restaurant.city}</div>
          <p tabindex="0" class="restoran_list_rating">
              Rating : 
              <a class="restoran_list_rating_value">${restaurant.rating}</a></br>
            </p>
              <a href="/#/detail/${restaurant.id}"><h1 class="restoran_list_title" tabindex="0">${restaurant.name}</h1></a>
              <div tabindex="0" class="restoran_list_desc">${restaurant.description}</div>
          </div>
        </div>
        </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
