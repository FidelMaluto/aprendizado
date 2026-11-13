let FieldInput = document.getElementById("FieldInput");
let Tasks = document.getElementById("Tasks");

// Função adicionar tarefa
function AddTask() {
  let newTask = FieldInput.value.trim();

  // Adicionando as tarefas
  if (newTask !== "") {
    let li = document.createElement("li");
    li.innerHTML = `
            <span>${newTask}</span>
            <button class="editButt" onclick="editButt(this)">Editar</button>
            <button class="removButt" onclick="removButt(this)">Apagar</button>
            `;

    //ADICIONANDO A TAREFA COM O APPENDCHILD
    Tasks.appendChild(li);
    FieldInput.value = "";
  }
}

// Função editar
function editButt(button) {
  let li = button.parentElement;
  let span = li.querySelector("span");
  let n = FieldInput.trim();
  let editedTask = prompt("Editar: ", span.textContent);

  // Condição de edição caso haja igualdade do valores ou valores nulos
  if (editedTask !== null && editedTask.trim() !== "") {
    span.textContent = editedTask.trim();
  }
}

// Função de deletar tarefa através da className
function removButt(button) {
  let li = button.parentElement;
  Tasks.removeChild(li);
}
