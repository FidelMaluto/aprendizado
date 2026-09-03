// CONSUMINDO RECURSOS COM fetch();
const url = 'https://jsonplaceholder.typicode.com/todos';

// Função para consumir com FETCH
async function consumirAPI() {
    const respo = await fetch(url);

    if (respo.status === 200) {
        const obj = await respo.json();

        console.log(obj);
    }
}

consumirAPI();
