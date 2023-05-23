const submitForm = (event) => {
    event.preventDefault();
    const todo = document.getElementById('todo').value;
    const list = document.getElementById('list');
    const div = document.createElement('div');
    const btn = document.createElement('button');
    const li = document.createElement('li');
    li.innerHTML = todo;
    btn.innerHTML = 'X';
    btn.style.color = 'red';
    btn.style.marginLeft = '10px';
    btn.onclick = () => {
        div.remove();
    }
    div.appendChild(li);
    div.appendChild(btn);
    div.style.display = 'flex';
    list.appendChild(div);
 }