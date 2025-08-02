window.onload = function() {
    console.log('skripta se učitala');

    const input = window.document.getElementById('unos');
    const ul = window.document.getElementById('taskovi');
    const dugme = window.document.getElementById('dodaj-dugme');

    function createTask() {
        const text = input.value;

        if (text.length === 0) {
            return;
        }

        const li = window.document.createElement('li');
        li.classList.add('task');

        const p = window.document.createElement('p');
        p.textContent = text;

        const inputCheckbox = window.document.createElement('input');
        inputCheckbox.type = 'checkbox';

        // Create delete button
        const deleteButton = window.document.createElement('button');
        deleteButton.textContent = 'X'; // Or 'Delete'
        deleteButton.classList.add('delete-btn');
        
        // Proper delete functionality
        deleteButton.addEventListener('click', function() {
            ul.removeChild(li); // This removes the task from the list
        });

        inputCheckbox.addEventListener('click', function(event) {
            if (inputCheckbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        // Add all elements to the task item
        li.append(inputCheckbox);
        li.append(p);
        li.append(deleteButton);

        // Add the task to the list
        ul.append(li);

        // Clear the input field
        input.value = '';
    }

    input.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            createTask();
        }
    });

    function klikDugmenta() {
        createTask();
    }

    dugme.addEventListener('click', klikDugmenta);
};