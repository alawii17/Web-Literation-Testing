import API_ENDPOINT from '../../scripts/globals/api-endpoint';

class RestaurantSource {
  static async getListRestaurant() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();
      if (responseJson.error) {
        throw new Error(responseJson.message);
      }
      return responseJson.restaurants;
    } catch (error) {
      throw new Error(`Failed to fetch restaurant data: ${error.message}`);
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      if (responseJson.error) {
        throw new Error(responseJson.message);
      }
      return responseJson.restaurant;
    } catch (error) {
      throw new Error(`Failed to fetch restaurant detail: ${error.message}`);
    }
  }

  static async addReview(reviewData) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to add review');
      }

      return responseData.customerReviews;
    } catch (error) {
      throw new Error(`Failed to add review: ${error.message}`);
    }
  }
}

export default RestaurantSource;
