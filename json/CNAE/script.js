document.addEventListener("DOMContentLoaded", async function(){
    
    const container = document.getElementById("container");

    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v2/cnae/classes');

    const dados = await resposta.json();

    dados.forEach(function(cnae){

        const divCnae = document.createElement('div')
        divCnae.classList.add('cnae-top');
        
        const id_titulo = document.createElement('h3');
        id_titulo.textContent = `CNAE: ${cnae.id} - ${cnae.descricao}`;

        const obsUL = document.createElement('ul');
        const obsLI = document.createElement('li');
    
        obsLI.textContent = `${cnae.observacoes}`;
        
        container.appendChild(divCnae)
        divCnae.appendChild(id_titulo)
        divCnae.appendChild(obsUL)
        obsUL.appendChild(obsLI)

    });
 

}
);