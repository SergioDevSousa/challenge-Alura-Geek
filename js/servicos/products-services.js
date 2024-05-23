const productList = () => {
    return fetch ("http://localhost:5501/products")
    .then((res) => res.json())
    .catch((err) => console(err));
}
export const serviceProduts = {
    productList,
};