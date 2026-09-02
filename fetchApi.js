// CONSUMINDO RECURSOS COM fetch();
const url = 'http://localhost:3003/carros';

// Função para consumir com FETCH
async function consumeAPI() {
    const resp = await fetch(url);

    if(resp.status === 200) {
        // Convertendo valores para json!
        const obj = await resp.json();
        // Imprimindo valores
        console.log(obj);
    }

}
// Chamando a função!
consumeAPI();
