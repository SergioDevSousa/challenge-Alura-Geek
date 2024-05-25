import { serviceProduts } from "../servicos/products-services.js";

const productContainer = document.querySelector("[data-products]");
const form = document.querySelector("[data-form]");
const deleteButtons = document.querySelector("[data-id]");

function createElement(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card">
            <div class="img-container">
                <img src="${image}" alt="${name}">
            </div>
            <div class="card-container--info">
                <p>${name}</p>
                    <div class="card-container--value">
                        <p>R$ ${price}</p>
                        <button class="delete-button button-reset" data-id="${id}">
                        <img src="./src/imgens/🦆 icon _trash2.png" alt="excluir">
                        </button>
                    </div>
            </div>
        </div>
    `
    productContainer.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listProduct = await serviceProduts.productList();
        productContainer.innerHTML = ''; // Limpa o container antes de adicionar os produtos

        listProduct.forEach(product => {
            const productElement = createElement(product.name, product.price, product.image, product.id);
            productContainer.appendChild(productElement);
        });

        // Adiciona os event listeners aos botões de exclusão
        addDeleteEventListeners();
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
};

const addDeleteEventListeners = () => {
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            deleteProduct(productId);
        });
    });
};

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    try {
        const response = await serviceProduts.creatProduct(name, price, image);
        console.log('Produto criado:', response);

        // Re-renderiza a lista de produtos após criar um novo
        render();
    } catch (error) {
        console.error('Erro ao criar produto:', error);
    }
});

const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`https://sergiodevsousa.github.io/apigeek/db.json/products/${productId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert(`Produto excluído com sucesso`);
            const productElement = document.querySelector(`.card [data-id="${productId}"]`).closest('.card');
            if (productElement) {
                productElement.remove();
            }
        } else {
            alert('Erro ao excluir o produto');
        }
    } catch (error) {
        console.error('Erro na solicitação:', error);
    }
};

document.addEventListener('DOMContentLoaded', render);

// const render = async () => {
//     try {
//         const listProduct = await serviceProduts.productList();

//         listProduct.forEach(product => {
//             productContainer.appendChild(
//                 createElement(product.name, product.price, product.image, product.id)
//             );

//         });
//     } catch (error) {
//     }
// };

// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const name = document.querySelector("[data-name]").value;
//     const price = document.querySelector("[data-price]").value;
//     const image = document.querySelector("[data-image]").value;


//     serviceProduts
//         .creatProduct(name, price, image)
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err));


// });

// render();


// document.addEventListener('DOMContentLoaded', () => {
//     // Adiciona um listener de evento para cada botão
//     deleteButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             // Obtém o ID do produto a partir do atributo data-id
//             const productId = this.getAttribute('.delete-button');

//             // Chama a função para excluir o produto
//             deleteProduct(productId);
//         });
//     });
// });

// // Definição da função deleteProduct
// function deleteProduct(productId) {
//     fetch(`/api/products/${productId}`, {
//         method: 'DELETE',
//     })
//     .then(response => {
//         if (response.ok) {
//             alert(`Produto com ID ${productId} excluído com sucesso`);
//             const productElement = document.querySelector(`.product[data-id="${productId}"]`);
//             if (productElement) {
//                 productElement.remove();
//             }
//         } else {
//             alert('Erro ao excluir o produto');
//         }
//     })
//     .catch(error => {
//         console.error('Erro na solicitação:', error);
//     });
// }






