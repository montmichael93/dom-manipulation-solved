/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
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
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

// Your code goes here

const main = document.getElementById('main')


/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */

// Your code goes here
const favs = document.getElementById('favs')


/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

// Your code goes here
function updateCollections(id, direction) {
    
    const card = document.getElementById(id);
    const mainClass = 'fa-solid fa-heart-circle-plus'
    const mainClassList = mainClass.split(' ');
    const favClass = 'fa-solid fa-heart-crack'
    const favClassList = favClass.split(' ');

    /*
    const containers = [mainClassList, favClassList];
    const params = direction === 'toMain'
        ? containers
        : containers.reverse()
    params.forEach((parent) => {
        for (const item of parent) {
            card.childNodes[0].classList.remove(item)
        }

    });*/

    if (direction === 'toMain') {
        for (const item of mainClassList) {
            card.childNodes[1].classList.remove(item)
        }
        for (const item of favClassList) {
            card.childNodes[1].classList.add(item)
        }
    } else {
        for (const item of favClassList) {
            card.childNodes[1].classList.remove(item)
        }
        for (const item of mainClassList) {
            card.childNodes[1].classList.add(item)
        }
    }



  

    
    
} 


/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

// Your code goes here...




for (const thing of allItems) {
    const cardCollection = document.getElementById(thing.id);
    cardCollection.onclick = function(event) {
    const selectedID = event.target.id;
    let parentID = event.target.parentNode.id;
    let currentDir = 'toMain';
    if (parentID === 'main') {
        favs.appendChild(thing);
    } else {
        currentDir = 'toFavs'
        main.appendChild(thing);
    } 
    updateCollections(selectedID, currentDir)
}
}





