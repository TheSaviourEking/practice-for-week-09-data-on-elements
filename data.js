// Your code here
window.addEventListener('DOMContentLoaded', () => {
    const ul = document.getElementById('shopping-list');
    document.getElementById('add').addEventListener('click', event => {
        event.preventDefault();
        const name = document.getElementById('name');
        const type = document.getElementById('type');
        ul.innerHTML += `<li data-type = ${type.value}>${name.value}</li>`;
    })
})
