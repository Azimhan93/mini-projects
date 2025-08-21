const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#todo');

form.addEventListener('submit', onSubmit);
list.addEventListener('click', onCLick);
list.addEventListener('dblclick', onDblClick);


function onSubmit(e) {
    e.preventDefault();
    const text = input.value.trim();
    if(!text) return;

    const li = document.createElement('li');
    li.innerHTML = `${text} <span class="remove">×</span>`;
    list.prepend(li);
    input.value = '';
    input.focus();
}

function onCLick(e) {
    if (e.target.closest('.remove')) {
        const li = e.target.closest('li');
        if(li &&list.contains(li)) {
            return li.remove();
        }
    }


    const li = e.target.closest('li');
    if (!li || !list.contains(li)) return;
    li.classList.toggle('bought');
}

function onDblClick(e) {
    const li = e.target.closest('li');
    if (!li || !list.contains(li)) return;
    li.remove();
}









