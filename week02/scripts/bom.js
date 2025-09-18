const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // you need to fill in the blank to reference the HTML ele

button.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    input.value='';
    input.focus;

    deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
    });
   }

   
});

