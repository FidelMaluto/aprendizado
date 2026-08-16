function cadastra() {
    const text = document.getElementById('text');
    const task = text.value.trim();

    if (text.value == '') return;

    const li = document.createElement('li');
    li.id = 'li';
    li.innerHTML = `
        <span>${task}</span><button>Eliminar</button>
    `;

    document.getElementById('lista').appendChild(li);

    text.value = '';
}

document.getElementById('text').addEventListener('keypress', function (e) {
    if(e.key === 'Enter') cadastra();
})
