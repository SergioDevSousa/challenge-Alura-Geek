const productList = () => {
    return fetch ("https://sergiodevsousa.github.io/apigeek/db.json/products")
    .then((res) => res.json())
    .catch((err) => console(err));
}

const creatProduct = (name, price, image) => {
    return fetch ("https://sergiodevsousa.github.io/apigeek/db.json/products" , {
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
    return fetch(`https://sergiodevsousa.github.io/apigeek/db.json/products/${productId}`, {
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
