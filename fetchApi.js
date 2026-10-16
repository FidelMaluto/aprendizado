// CONSUMINDO RECURSOS COM fetch();
const url = "https://conta.unitel.ao/MyUnitel/Planos";

// Função para consumir com FETCH
async function consumir() {
  // Chamando e consumindo a API
  const response = await fetch(url);

  // condição do estado (OK 200)
  if (response.status === 200) {
    // Convertendo para json()
    const object = await response.json();

    // Imprimindo o resultado!
    console.log(object);
  }
}

// Chamando e executando a função
consumir();
