import {serviceProduts} from "../servicos/products-services.js";

const productContainer = document.querySelector("[data-product]");

function createElement(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card">
            <div class="img-container">
                <img src="${image}" alt="${nome}">
            </div>
        </div>

        <div class="card-container--info">
                <p>${name}</p>
                <div class="card-container--value">
                <p>${price}</p>
                <button class="delete-button" data-id="${id}">
                    <img src="./src/imgens/🦆 icon _trash 2_.png" alt="icone__lixeira">
                </button>
            </div>
        </div>
    `
    productContainer.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listProduct = await serviceProduts.productList ();
        listProduct.array.forEach(product => {
            productContainer.appendChild(
                createElement(product.name, product.price, producto.image, product.id)
            );
            
        });
    }catch (error) {
        }
};

render()

