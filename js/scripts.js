function newItem() {

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if(inputValue === '') {
        alert('Write something!');
    } else {
        $('#list').append(li);
    }

function crossOut() {
    li.toggleClass('.strike');
}

li.on('dblclick', crossOut);

let crossOutButton = $('<crossOutButton></crossOutButton>')
li.append(crossOutButton);

crossOutButton.on('Click', deleteListItem);
   function deleteListItem() {
    li.addClass('delete');
   }

$('#list').sortable();

}