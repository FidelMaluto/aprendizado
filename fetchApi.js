//CONSUMINDO RECURSOS COM fetch();
const url = 'http://localhost:3003/carros';

async function chamarApi() {
    const resp = await fetch(url);
    //convertendo a respos em JSON
    if(resp.status === 200){
        const obj = await resp.json();

        console.log(obj)
    }
    
}

chamarApi();
