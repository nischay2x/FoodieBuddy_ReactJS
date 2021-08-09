import React from 'react';
import { useSelector } from 'react-redux';

import CuisineCard from './CuisineCard';
import SearchBar from './SearchBar';

import { Cuisines, Meals } from './images/index';
import Recipes from './Recipes';

const Home = () => {

    const data = useSelector(state => state.Recipes);
    const {hits} = data;

    return( 
        <div className="container p-3">
            <SearchBar/>
            {(!hits) ?
                <div>
                    <div className="mb-4">
                        <span className="text-white font-weight-bold" style={{ fontSize: '25px' }}>Start with Meals . . . </span>
                        <div className="row justify-content-center">
                            {Meals.map(meal => { return <CuisineCard key={meal.code} type='mealType' src={meal.img} food={meal.food} text={meal.text}></CuisineCard> })}
                        </div>
                    </div>
                    <div className="mb-4">
                        <span className="text-white font-weight-bold" style={{ fontSize: '25px' }}>Choose From Cuisines . . . </span>
                        <div className="row justify-content-center">
                            {Cuisines.map(cuisine => { return <CuisineCard key={cuisine.code} type='cuisineType' src={cuisine.img} food={cuisine.food} text={cuisine.text}></CuisineCard> })}
                        </div>
                    </div>
                </div> 
                :
                <Recipes data={data}/>
            }
        </div>
    )
}

export default Home;
