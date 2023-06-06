// Obténdo o parâmetro de URL "id"
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Faz uma requisição para obter os detalhes do produto com o ID fornecido
fetch(`https://diwserver.vps.webdock.cloud/products/${productId}`)
    .then(res => res.json())
    .then(product => {
        const productDetails = document.getElementById("productDetails");

        // Criando o HTML para exibir os detalhes do produto
        const productHtml = `
            <div style="background-color: #A6B1E1">
                <h2>${product.title}</h2>
                <img src="${product.image}" alt="Imagem do Produto" class="w-50">
                <p>Descrição: ${product.description}</p>
                <p>Preço: R$ ${product.price}</p>   
                <a href="index.html" class="btn btn-primary mb-5">Voltar</a>
            </div>
        `;

        // Inserindo o HTML dos detalhes do produto no elemento com o ID "productDetails"
        productDetails.innerHTML = productHtml;
    })
    .catch(error => {
        console.error('Erro ao obter detalhes do produto:', error);
    });