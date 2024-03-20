async function teste() {

    event.preventDefault(); //botao submit so funciona com esse comando!!!
    try {

        // formatar a url -inicio- 

        // const urlForm = "https://viacep.com.br/ws/sub1/sub2/sub3/json/";

        // const ufDigi = document.getElementById("estado").value;
        // const cidadeDigi = document.getElementById("cidade").value;
        // const ruaDigi = document.getElementById("rua").value;

        // const url1 = urlForm.replace("sub1", ufDigi);
        // const url2 = url1.replace("sub2", cidadeDigi);
        // const url3 = url2.replace("sub3", ruaDigi);

        let url3 = "https://viacep.com.br/ws/sp/marilia/rua%20leonor%20mazalli/json/"
        
        // formatar a url -final-


        const resposta = await fetch(url3);

        const dados = await resposta.json();

        /*------------------------------------------------*/

        let cep = document.getElementById('cep');
        let logradouro = document.getElementById('logradouro');
        let complemento = document.getElementById('complemento');
        let bairro = document.getElementById('bairro');
        let localidade = document.getElementById('localidade');
        let uf = document.getElementById('uf');
        let ddd = document.getElementById('ddd');

        /*------------------------------------------------*/

        const cepd = document.createElement('spam');
        const ruad = document.createElement('spam');
        const compd = document.createElement('spam');
        const bairrod = document.createElement('spam');
        const locd = document.createElement('spam');
        const ufd = document.createElement('spam');
        const dddd = document.createElement('spam');

        /*------------------------------------------------*/

        cepd.textContent = `${dados['cep']}`;
        ruad.textContent = `${dados['logradouro']}`;
        compd.textContent = `${dados['complemento']}`;
        bairrod.textContent = `${dados['bairro']}`;
        locd.textContent = `${dados['localidade']}`;
        ufd.textContent = `${dados['uf']}`;
        dddd.textContent = `${dados['ddd']}`;

        /*------------------------------------------------*/

        cep.appendChild(cepd);
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