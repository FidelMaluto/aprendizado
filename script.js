function cadastra() {
    const text = document.getElementById('text');
    const task = text.value.trim();

    if (text.value == '') return;

    const li = document.createElement('li');
    li.id = 'li';
    li.innerHTML = `
        <span>${task}</span>
        <button class="edit" onclick="editTask(this)">Editar</button>
        <button class="exclui" onclick="excluiTask(this)">Eliminar</button>
    `;

    document.getElementById('lista').appendChild(li);

    text.value = '';
}
// Validar campo com Enter
document.getElementById('text').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') cadastra();
});

// Função para editar tarefa
function edit(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const newTask = prompt('Editar: ', span.textContent);

    if (newTask !== null && newTask.trim() === "") {
        span.textContent = newTask.trim();
    }
    
}

// Função para apagar tarefa
function excluiTask(button) {
    const li = button.parentElement;
    document.getElementById('lista').removeChild(li);
}
