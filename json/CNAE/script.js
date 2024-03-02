document.addEventListener("DOMContentLoaded", async function(){
    
    const container = document.getElementById("container");
    const list = getElementById("obs-cnae");

    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v2/cnae/classes');

    const dados = await resposta.json();

    dados.forEach(function(cnae){

        const id_titulo = document.createElement('h3');
        const obs = document.createElement('li');
        
        

        id_titulo.textContent = `CNAE: ${cnae.id} - ${cnae.descricao}`;
        obs.textContent = `${cnae.observacoes}`;
        
        container.appendChild(id_titulo)
        list.appendChild(obs)

    });
 

}
);