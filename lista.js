const text = document.getElementById("text");
const lista = document.getElementById("lista");

// Função cadastrar tarefas
function cadastra() {
  const tarefa = text.value.trim();
  const li = document.createElement("li");

  // Condição de campo vazio
  if (text.value === "") return;

  // Impreensão das tarefas com buttons e span
  li.innerHTML = `
                <span>${tarefa}</span>
                <button class="edit" onclick="edit(this)">Editar</button>
                <button class="excluir" onclick="excluir(this)">Excluir</button>
            `;
  // Colocando as tarefas na ul e esvaziar o campo
  lista.appendChild(li);
  text.value = "";
}

// Função Editar tarefas
function edit(butto) {
  let li = butto.parentElement;
  let span = li.querySelector("span");
  let novaTarefa = prompt("Edita: ", span.textContent);

  // Condição da recessão dos novos campos
  if (novaTarefa !== null && novaTarefa.trim() !== "") {
    span.textContent = novaTarefa.trim();
  }
}

// Função deletar taarefas
function excluir(butto) {
  let li = butto.parentElement;
  lista.removeChild(li);
}

// Cadastrar tarefas com um click no Enter
document.getElementById("text").addEventListener("keypress", function (e) {
  if (e.key === "Enter") cadastra();
});
