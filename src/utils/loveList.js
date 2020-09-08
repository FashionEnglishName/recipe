//TODO reduce the size of id
//     all of they start with the same string

/**
 * 
 * @param {string} id the recipe uri that to be added into 
 *                    the love list
 * @returns {boolean} true if add to list successfully
 *                    false if it's already in the list
 */
export const add = (id, title, author, image) => {
    const recipeString = `${id}@@${title}@@${author}@@${image}`;

    let lovedLine = localStorage.getItem('loved');
    let lovedList = [];
    if(lovedLine)
        lovedList = lovedLine.split(',');
    
    if(lovedList.includes(recipeString)) return false;
    else {
        lovedList.unshift(recipeString);
        localStorage.setItem('loved', lovedList);
        return true;
    }
    
}

/**
 * 
 * @param {string} id the recipe uri that to be removed from 
 *                    the love list
 * @returns {boolean} true if it is removed successfully
 *                    false if it is not removed
 */
export const remove = id => {
    let lovedLine = localStorage.getItem('loved');
    if(!lovedLine) 
        return false;
    const lovedList = lovedLine.split(',');
    const newLovedList = lovedList.filter(recipe => !recipe.startsWith(id));
    if(newLovedList.length === lovedList.length)
        return false;
    else {
        localStorage.setItem('loved', newLovedList);
        return true;
    } 
}

/**
 * 
 * @param {string} id check if id of recipe is in love list
 * @returns {boolean} 
 */
export const contains = id => {
    const lovedLine = localStorage.getItem('loved');
    console.log("love list", id);
    console.log("love list", lovedLine.indexOf(id));
    if(!lovedLine) return false;
    return lovedLine.split(',').includes(id);
}
/**
 * @returns {number} how many loved recipe in localStorage
 */
export const size = () => {
    const lovedLine = localStorage.getItem('loved');
    if(!lovedLine) 
        return 0;
    return lovedLine.split(',').length;
}

/**
 * 
 * @param {string} id the uri
 * @returns {object} {
 *                      uri: {string}
 *                      title: {string}
 *                      author: {string}
 *                      image: {string}
 *                      }
 */
export const get = (id) => {
    const lovedLine = localStorage.getItem('loved');
    if(!lovedLine) return null;

    const lovedTarget = lovedLine.split(',').find(loved => loved.startsWith(id));
    return parseRecipe(lovedTarget);
}

/**
 * 
 * @returns {[object]} [{
 *                      uri: {string}
 *                      title: {string}
 *                      author: {string}
 *                      image: {string}
 *                      }]
 */
export const getAll = () => {
    const lovedLine = localStorage.getItem('loved');
    if(!lovedLine) return null;

    const lovedList = lovedLine.split(',');
    const recipeList = lovedList.map(loved => {
        return parseRecipe(loved);
    });

    return recipeList;
}

/**
 * 
 * @param {string} recipeString the string to be parsed
 * @returns {object} {
 *                      uri: {string}
 *                      title: {string}
 *                      author: {string}
 *                      image: {string}
 *                      }
 */
const parseRecipe = (recipeString) => {
    const recipeProps = recipeString.split('@@');
    return {
        uri: recipeProps[0],
        title: recipeProps[1],
        author: recipeProps[2],
        image: recipeProps[3]
    }
}