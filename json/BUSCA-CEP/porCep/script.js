async function teste() {

    event.preventDefault(); //botao submit so funciona com esse comando!!!
    try {

        // formatar a url -inicio- 
        const urlForm = "https://viacep.com.br/ws/sub/json/";

        const cepDigi = document.getElementById("cep").value;

        const url = urlForm.replace("sub", cepDigi);
        // formatar a url -final-

        const endereco = ["logradouro", "complemento", "bairro", "localidade", "uf", "ddd"];

        const resposta = await fetch(url);

        const dados = await resposta.json();

        /*------------------------------------------------*/

        let logradouro = document.getElementById('logradouro');
        let complemento = document.getElementById('complemento');
        let bairro = document.getElementById('bairro');
        let localidade = document.getElementById('localidade');
        let uf = document.getElementById('uf');
        let ddd = document.getElementById('ddd');

        /*------------------------------------------------*/

        const ruad = document.createElement('spam');
        const compd = document.createElement('spam');
        const bairrod = document.createElement('spam');
        const locd = document.createElement('spam');
        const ufd = document.createElement('spam');
        const dddd = document.createElement('spam');

        /*------------------------------------------------*/

        ruad.textContent = `${dados['logradouro']}`;
        compd.textContent = `${dados['complemento']}`;
        bairrod.textContent = `${dados['bairro']}`;
        locd.textContent = `${dados['localidade']}`;
        ufd.textContent = `${dados['uf']}`;
        dddd.textContent = `${dados['ddd']}`;

        /*------------------------------------------------*/

        logradouro.appendChild(ruad);
        complemento.appendChild(compd);
        bairro.appendChild(bairrod);
        localidade.appendChild(locd);
        uf.appendChild(ufd);
        ddd.appendChild(dddd);

        /*------------------------------------------------*/
    }
    catch (error) { }
};