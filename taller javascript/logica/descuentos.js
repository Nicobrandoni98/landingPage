const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const result = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

const couponsObj = {
  'a': 15,
  'b': 20,
  'c': 25,
  'd': 30,
};

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputDiscount.value;

  if (!price) {
    result.innerText = "Llena el formulario";
    return;
  }

  if (couponsObj[coupon]) {
    discount = couponsObj[coupon];
  } else if (coupon == '') {
    result.innerText = `El precio es de $${price}`;
    return;
  } 
  else {
    result.innerText = "El cupon no es valido";
    return;
  }

  const newPrice = (price * (100 - discount)) / 100;

  result.innerText = `El nuevo precio con el descuento es $ ${newPrice}`
}
