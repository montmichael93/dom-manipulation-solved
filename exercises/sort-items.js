/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * "02 SortingNode.md" 
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
const allItems = document.getElementsByClassName('item');


/**
 * @task
 * Select all sort buttons by class of "sortBtn" as a NodeList.
 * Store them in the sortBtn variable
 * Example: const sortBtn = <Your code>;
 */

// Your code goes here...
const sortBtn = document.getElementsByClassName('sortBtn');


/**
 * @task
 * Create a sortData function that follows the list of requirements:
 * * Takes an argument of the direction to sort as a string of 'asc' or 'desc'
 * * Defines a container variable to get the node by id of 'main'
 * * Uses the allItems variable as a source for the array of items to sort
 * * Sorts the items by id and appends them back to the main container in the sorted order.
 * Example: sortData('desc') => <reversed order of items in the main container>
 * Example: sortData('asc') => <a-z order of items in the main container>
 */

// Your code goes here...
function sortData(direction) {
    /*
    let container = document.getElementById('main');
    const allItemsSortArr = Array.from(allItems).sort((a,b) =>{
        const params = direction === 'desc'
        ? [a, b] : [b, a];
        params[0].textContent.localeCompare(params[1].textContent)
    });
    allItemsSortArr.forEach(item => {
        container.appendChild(item);
    }); */
  





    
    let container = document.getElementById('main');
    if (direction === 'desc') {
        const allItemsSortReverse = Array.from(allItems).sort((a,b) =>b.textContent.localeCompare(a.textContent));
        allItemsSortReverse.forEach(item => {
            container.appendChild(item);
        });
    } else {
        allItemsSort = Array.from(allItems).sort((a,b) => a.textContent.localeCompare(b.textContent));
        allItemsSort.forEach(item =>{
            container.appendChild(item);
        });
    } 

    
}



/**
 * @task
 * Iterate through the every item in sortBtn NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Make the sortData function call, assign the item's dataset sortdir property
 */

// Your code goes here...

for (const item of sortBtn) {
    item.addEventListener('click', function() {
        const sortDir = this.dataset.sortdir;
        sortData(sortDir);
    });
}




