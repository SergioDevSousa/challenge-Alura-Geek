const productList = () => {
    return fetch ("http://localhost:5501/products")
    .then((res) => res.json())
    .catch((err) => console(err));
}

const creatProduct = (name, price, image) => {
    return fetch ("http://localhost:5501/products" , {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
        }),
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
const deleteProduct = (id) => {
    return fetch(`http://localhost:5501/products/${productId}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export const serviceProduts = {
    productList,
    creatProduct,
    deleteProduct
};
