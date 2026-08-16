function cadastra() {
    const text = document.getElementById('text');
    const task = text.value.trim();

    const li = document.createElement('li');
    li.id = 'li';
    li.textContent = task;

    document.getElementById('lista').appendChild(li);

    text.value = '';
}

document.getElementById('text').addEventListener('keypress', function (e) {
    if(e.key == '') cadastra();
})
