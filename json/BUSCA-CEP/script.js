async function teste() {

    event.preventDefault(); //botao submit so funciona com esse comando!!!
    try {

        // formatar a url -inicio- 
        const urlForm = "https://viacep.com.br/ws/sub/json/";

        const cepDigi = document.getElementById("cep").value;

        const url = urlForm.replace("sub", cepDigi);
        // formatar a url -final-

        const endereco = ["cep", "logradouro", "complemento", "bairro", "localidade", "uf"];

        const resposta = await fetch(url);

        const dados = await resposta.json();

        const corpo = document.getElementById('resultado');

        for (let i = 0; i < 6; i++) {

            const paragrafo = document.createElement('p');
            paragrafo.textContent = `${endereco[i]}: ${dados[endereco[i]]}`;

            corpo.appendChild(paragrafo);
        }

    }
    catch (error) { }
};

async function endCep(){
    event.preventDefault();
};


