import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

/* function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
  
} */

function putData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: 'Producto de nico',
  description: 'A description',
  price: 122223,
  categoryId: 46,
  images: ["https://placehold.co/600x400"]
};

const productId = 90;

/* postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err)); */

putData(`${API}/products/${productId}`, data)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
