// CONSUMINDO RECURSOS COM fetch();
const url = 'http://localhost:3003/carros';


async function consumeAPI() {
    const resp = await fetch(url);

    if(resp.status === 200) {
        const obj = await resp.json();
        console.log(obj);
    }

}

consumeAPI();
