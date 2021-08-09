import React from 'react';
import { useDispatch } from 'react-redux';
import { searchRecipeDefaultLimit } from '../actions/Recipies';
import { pageHandler } from '../actions/PageHandler';

const CuisineCard = (props) => {

    const {src, type, food, text} = props;
    const dispatch = useDispatch();

    const handleClick = () => {
        var spinner = document.querySelector('.loader');
        spinner.classList.add('spin');
        const rest = food.toLowerCase();
        dispatch(searchRecipeDefaultLimit(food, "&"+type+"="+rest));
        dispatch(pageHandler({'search' : food, 'restrict' : "&"+type+"="+rest}));
    } 

    return(
        <div onClick={() => handleClick()} className="bg-transparent col-md-3 col-6 px-0 py-0">
            <div className="cuisine-display-card m-2">
                <img src={src} alt={food} width='100%' className='cuisine-display-img' />
                <h4 className="text-white mx-2 py-1 border-bottom border-warning">{food}</h4>
                <div className="cuisine-display-content">
                    <p className="text-white p-2" style={{ fontSize: 'small' }}>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CuisineCard;