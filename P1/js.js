function criarTarefa() {
  const tarefas = document.getElementById("tarefas");
  const texto = document.getElementById("texto");
  const tarefa = texto.value.trim();

  // Simples validação
  if (texto.value == "") return;

  // Criandas lis
  const li = document.createElement("li");
  li.innerHTML = `
                <span>${tarefa}</span>
                <button class="edit" onclick="edit(this)">Editar</butto>
                <button class="elim" onclick="elim(this)">Eliminar</butto>
            `;

  tarefas.appendChild(li);
  texto.value = "";
}

// Tarefa com enter
document.getElementById("texto").addEventListener("keypress", (e) => {
  if (e.key === "Enter") criarTarefa();
});

// Editar tarefas
function edit(button) {
  let li = button.parentElement;
  let span = li.querySelector("span");
  let novaTarefa = prompt("Edite: ", span.textContent);

  // Condição da edição
  if (novaTarefa !== null && novaTarefa.trim() !== "") {
    span.textContent = novaTarefa.trim();
  }
}

// Eliminar tarefas
function elim(button) {
  let li = button.parentElement;
  tarefas.removeChild(li);
}
