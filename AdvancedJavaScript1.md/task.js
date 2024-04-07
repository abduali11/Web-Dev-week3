import { restaurantModal, restaurantRow } from "./components.js";
import { fetchRestaurants, fetchdailyMenu } from "./utils.js";

fetchRestaurants().then((restaurants) => {
  displayrestaurants(restaurants);
});

const displayrestaurants = async (restaurants) => {
  const table = document.querySelector("table");

  for (const restaurant of restaurants) {
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
  }
};

document.getElementById("closeButton").addEventListener("click", () => {
  document.getElementById("restaurantModal").close();
});
