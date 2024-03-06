document.addEventListener("DOMContentLoaded", async function(){  
    const conteudo = document.getElementById('conteudo');

    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/agregados/1705/variaveis?view=OLAP&localidades=BR');

    const dados = await resposta.json();    

    dados.forEach( function(inflacao) {       

        const blocoInflacao = document.createElement('div')
        blocoInflacao.classList.add('bloco-inflacao');
        
        const ul = document.createElement('ul');
        ul.classList.add('subtitulo')
        ul.id = "subtitulo";
        
        const li = document.createElement('li')
        li.textContent = `${inflacao.medida} - (${inflacao.unidade})`

        blocoInflacao.appendChild(ul)
        ul.appendChild(li)
       
        const resultados = inflacao.resultados;
            
        resultados.forEach(function(resultado){

            const ol = document.createElement('ol')
            
            
            const series = resultado.series;

            series.forEach(function(serieGeral){

                const serieData = serieGeral.serie;

                for( const anoMes in serieData){
                    liSerie = document.createElement('li');
                    liSerie.textContent = `${anoMes} - ${serieData[anoMes]}` 
                    ol.appendChild(liSerie)
                }

            });
            
            ul.appendChild(ol)
        });
               
        conteudo.appendChild(blocoInflacao)
    
    });
}
)  
  