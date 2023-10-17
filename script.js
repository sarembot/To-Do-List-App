function displayText(event){
    event.preventDefault() //prevents page from reloading right away. This happens with form inputs

    let item = document.getElementById('addItem');
    let listItem = item.value.trim();

    if (listItem !== ''){

    let displayDiv = document.querySelector('#displayDiv');

    let newDiv = document.createElement('div');
    newDiv.textContent = listItem;
    newDiv.setAttribute('class', 'newDiv');
    newDiv.addEventListener('click', toggleCompleted);

    let exitButton = document.createElement('button');
    exitButton.textContent = 'X';

    displayDiv.appendChild(newDiv);

    newDiv.appendChild(exitButton);
    exitButton.setAttribute("class", "exitButton");
    
    exitButton.addEventListener('click', deleteText);

    item.value = ''
    }
}

function toggleCompleted(event) {
    event.target.classList.toggle('completed')

}

function deleteText(event) {
    event.preventDefault();
    let divToRemove = event.target.parentNode; //Gets the parent div
    divToRemove.parentNode.removeChild(divToRemove); //Removes parent div
}



//'DOMContentLoaded' ensures JS code runs after HTML content has loaded
document.addEventListener('DOMContentLoaded', function() {
    let addButton = document.getElementById('addButton');
    addButton.addEventListener('click', displayText);
});


