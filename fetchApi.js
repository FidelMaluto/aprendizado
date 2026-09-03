// CONSUMINDO RECURSOS COM fetch();
const url = 'https://jsonplaceholder.typicode.com/todos';

// Função para consumir com FETCH
async function consumirAPI() {
    // Chamando e consumindo a API
    const respo = await fetch(url);
    // condição do estado (OK 200)
    if (respo.status === 200) {
        // Convertendo para json()
        const obj = await respo.json();
        // Imprimindo o resultado!
        console.log(obj);
    }
}
// Chamando e executando a função
consumirAPI();
