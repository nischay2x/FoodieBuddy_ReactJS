import React from 'react';
import RecipeCards from './RecipeCards';

import { LeftArrowFill, RightArrowFill } from "../Icons/bootstrapIcons";
import { useDispatch } from 'react-redux';
import { searchRecipeNewLimit } from '../actions/Recipies';

const Recipes = (props) => {

    const {count, hits, q, from, to, more} = props.data;
    const dispatch = useDispatch();

    const nextPage = () => {
        const limit = '&from='+(from+10)+'&to='+(to+10);
        dispatch(searchRecipeNewLimit(q.split(" ").join("%20"), limit)); 
    }

    const prevPage = () => {
        const limit = '&from='+(from-10)+'&to='+(to-10);
        dispatch(searchRecipeNewLimit(q.split(" ").join("%20"), limit)); 
    }

    return(
        <div>
            {(count) ?
                <div className="d-flex justify-content-between">
                    <p className="text-white">({count}) Search Results for "{q}"</p> <a href="/" className="text-warning">Clear Search ?</a>
                </div> 
                :
                <div className="d-flex justify-content-between">
                    <p className="text-white">No results for "{q}"</p> <a className="text-warning" href="/">Back to Home ?</a>
                </div>
            }
            <div className="row">
                {hits.map(item => { return <RecipeCards key={hits.indexOf(item)} recipe={item.recipe}></RecipeCards> })}
            </div>

            <div className="d-flex my-4 justify-content-between">
                {(from)?
                    <button className="btn-outline-info py-1 d-flex align-items-center" onClick={prevPage} style={{ gap: '1vh' }}>
                        <LeftArrowFill size='20' />
                    </button> 
                    : <p></p>
                }
                {(more)? 
                    <button className="btn-outline-info py-1 d-flex align-items-center" onClick={nextPage} style={{ gap: '1vh' }}>
                        <RightArrowFill size='20' />
                    </button> : <p></p> 
                }
            </div>
        </div>
    )
}

export default Recipes;