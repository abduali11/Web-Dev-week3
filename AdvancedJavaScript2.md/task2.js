import { restaurantModal, restaurantRow } from "./components1.js";
import { fetchRestaurants, fetchdailyMenu } from "./utils1.js";

fetchRestaurants().then((restaurants) => {
  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.company == "Sodexo" || restaurant.company == "Compass Group"
  );

  displayRestaurants(filteredRestaurants);
});

const displayrestaurants = async (restaurants) => {
  const table = document.querySelector("table");

  restaurants.forEach(async (restaurant) => {
    const { _id, name, address } = restaurant;
    const menuData = await fetchdailyMenu(_id);
    restaurant.menu = menuData;

    const tr = restaurantRow(restaurant); // call restaurantRow function to create the <tr>

    tr.addEventListener("click", () => {
      console.log(restaurant.menu);

      const modalContent = restaurantModal(restaurant.menu, restaurant);

      document.getElementById("menuContainer").innerHTML = modalContent;
      document.getElementById("restaurantModal").showModal();
    });
    table.appendChild(tr);
  });
};

document.getElementById("closeButton").addEventListener("click", () => {
  document.getElementById("restaurantModal").close();
});
