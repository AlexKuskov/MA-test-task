const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];
const orderedList = document.createElement('ol');
const listItems = [];

editFruitsArray();
fillListItemsArray();
fillOrderedList();

document.body.appendChild(orderedList);


function editFruitsArray() {
    const appleIndex = fruits.indexOf('Apple');

    fruits[appleIndex] = 'Only ' + fruits[appleIndex];
}

function fillListItemsArray() {
    for (let fruit of fruits) {
        listItems.push(createListItem(fruit));
    }
}

function createListItem(fruit) {
    const listItem = document.createElement('li');
    const fruitItem = document.createTextNode(fruit);
    
    listItem.appendChild(fruitItem);
    return listItem;
}

function fillOrderedList() {
    for (let listItem of listItems) {
        orderedList.appendChild(listItem);
    }
}