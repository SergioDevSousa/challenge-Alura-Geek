const productList = () => {
    return fetch ("https://665882315c3617052648c8b8.mockapi.io/api/geek/products")
    .then((res) => res.json())
    .catch((err) => console(err));
}

const creatProduct = (name, price, image) => {
    return fetch ("https://665882315c3617052648c8b8.mockapi.io/api/geek/products" , {
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
    return fetch(`https://665882315c3617052648c8b8.mockapi.io/api/geek/products/${id}`, {
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