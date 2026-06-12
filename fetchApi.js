// CONSUMINDO RECURSOS COM fetch();
const url = 'http://localhost:3003/carros';

async function chamarApi() {
    const resp = await fetch(url);

    // Verificando o status
    if(resp.status === 200){

    // convertendo a respos em JSON
        const obj = await resp.json();

        console.log(obj)
    }
    
}

chamarApi();
