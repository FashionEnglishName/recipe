export const OPEN_RECIPE = "OPEN_RECIPE";

export const open_recipe = (recipe) => {
    return {
        type: OPEN_RECIPE,
        recipeInfo: recipe
    }
}

