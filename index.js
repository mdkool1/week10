let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdContact = new Text();
	console.log('variable createdContact empty string =', createdContact);
    
    let table = document.getElementById('contact-table');
    console.log('variable table = This is new container from input', table);

    let row = table.insertRow(1);
    console.log('variable row = This is adding another row of data from text input', row);

    row.setAttribute('id', `item-${id}`);
	console.log('row.setAttribute: sets new ID to added item', 'id', `item-${id}`)

    row.insertCell(0).innerHTML = document.getElementById('new-name').value;
	console.log('row.insertCell(0) =', document.getElementById('new-name').value);

    row.insertCell(1).innerHTML = document.getElementById('new-number').value;
	console.log('row.insertCell(1) =', document.getElementById('new-number').value);

    row.insertCell(2).innerHTML = document.getElementById('new-email').value;
	console.log('row.insertCell(2) =', document.getElementById('new-email').value);

    let actions = row.insertCell(3);
    console.log('variable "actions" =', actions);

    actions.appendChild(createDeleteButton(id++));
	console.log('This appendsChild ', createDeleteButton(id++));

    document.getElementById('new-name').value = '';
    document.getElementById('new-number').value = '';
    document.getElementById('new-email').value = '';
});

function createDeleteButton(id) {

    let btn = document.createElement('button');
	console.log(document.createElement('button'));

    btn.className = 'btn btn-danger';
	console.log(btn.className);

    btn.id = id;
	console.log(btn.id);

    btn.innerHTML = 'Remove';
	console.log(btn.innerHTML);

    btn.onclick = () => {

        let elementToDelete = document.getElementById(`item-${id}`);
				
        elementToDelete.parentNode.removeChild(elementToDelete);
		console.log('Deleting :', elementToDelete);
    };
	console.log(btn);
    return btn;	
}