const fetchRestaurants = async () => {
  try {
    const response = await fetch(
      "https://10.120.32.94/restaurant/api/v1/restaurants"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchdailyMenu = async (id) => {
  try {
    const response = await fetch(
      `https://10.120.32.94/restaurant/api/v1/restaurants/daily/${id}/fi`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchRestaurants, fetchdailyMenu };
