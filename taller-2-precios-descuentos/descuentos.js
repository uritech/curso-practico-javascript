const coupons = [
    {
        name: "Promocion1",
        discount: 15,
    },
    {
        name: "20Verano",
        discount: 20,
    },
    {
        name: "25Total",
        discount: 25,
    }
]

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function buttonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    const isCouponValid = function (coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValid);

    if (!userCoupon) {
        alert("El cupón " + userCoupon + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        const resultP = document.getElementById("ResultPrice");
        resultP.innerText = "El precio con descuento es de: $" + precioConDescuento;
        console.log(descuento);
    }


}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });