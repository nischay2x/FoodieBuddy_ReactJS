const Recipes = (recipe = [], action) => {
    switch(action.type){
        case 'RECIPES' : return action.payload;
        default : return recipe;
    }
}

export default Recipes;