function restaurantRow(restaurant) {
  const { _id, name, address } = restaurant;
  let tr = document.createElement("tr");
  tr.innerHTML = `<td>${name}</td><td>${address}</td>`;
  return tr;
}

let restaurantModal = (menu, restaurant) => {
  const { name, address, postalcode, city, phone, company } = restaurant;
  const { courses } = menu;

  let menuHtml = "";
  courses.forEach((course) => {
    menuHtml += `<p>${course.name} ${course.price}€</p>`;
  });

  let htmlContent = `
      <h2>${name}</h2>
      <p>${address}</p>
      <p>${postalcode}</p>
      <p>${city}</p>
      <p>${phone}</p>
      <p>${company}</p>
      ${menuHtml}
    `;
  return htmlContent;
};

export { restaurantRow, restaurantModal };
