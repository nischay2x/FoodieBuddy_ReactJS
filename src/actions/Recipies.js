import * as api from '../api/edamam';

var rests = '';

export const searchRecipeDefaultLimit = (query, restrictions) => async(dispatch) => {

    //console.log(query + '&from=0&to=10'+restrictions);
    rests = restrictions;
    try {
        const {data} = await api.fetchRecipes(query, '&from=0&to=10'+restrictions);
        var spinner = document.querySelector('.loader'); spinner.classList.remove('spin');
        // console.log(data);
        dispatch({type : 'RECIPES', payload : data});
    } catch (error) {
        console.log(error);
    }
}

export const searchRecipeNewLimit = (query, limit) => async(dispatch) => {

    //console.log(query + rests + limit);

    try {
        const {data} = await api.fetchRecipes(query, limit+rests);
        var spinner = document.querySelector('.loader'); spinner.classList.remove('spin');
        // console.log(data);
        dispatch({type : 'RECIPES', payload : data});
    } catch (error) {
        console.log(error);
    }
}

