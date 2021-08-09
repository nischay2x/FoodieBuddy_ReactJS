import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from '../Icons/bootstrapIcons';
import { searchRecipeDefaultLimit } from '../actions/Recipies';


const SearchBar = () => {
    
    const { restrict} = useSelector(state => state.pageHandler);

    var [searchQuery, setSearchQuery] = useState('');
    const [dietLabel, setDietLabel] = useState('');
    const [healthLabel, setHealthLabel] = useState('');
    const dispatch = useDispatch();

    const handleKeypress = (e) => {
        if(e.key === 'Enter') handleSearch();
    }

    const handleSearch = () => {
        if(searchQuery){
            var spinner = document.querySelector('.loader');
            spinner.classList.add('spin');

            searchQuery = searchQuery.split(' ').join('%20'); 
            var others = '';
            if(dietLabel) others += `&diet=${dietLabel}`;
            if(healthLabel) others += `&health=${healthLabel}`;
            others = others+restrict;
            dispatch(searchRecipeDefaultLimit(searchQuery, others));
            //console.log(searchQuery + " " +others);
        } else {
            alert('Please Enter Something')
        }
    }

    return(
        <div className="jumbotron bg-transparent my-2">
            <div className="d-flex justify-content-center form-group">
                <input type="text" 
                    className="form-control col-md-7 col-sm-10" 
                    placeholder="Search Recipies, Dishes, Cuisines and more ..."
                    onChange={e => setSearchQuery(e.target.value)}
                    onKeyPress={e => handleKeypress(e)}
                />
                <button className="btn-warning rounded mx-1" onClick={() => handleSearch()}>
                    <Search size={30} />
                </button>
            </div>
            <div className="d-flex justify-content-center form-group align-items-center">
                <span className="text-center text-light mx-1" style={{minWidth : 'fit-content', fontSize : '20px', fontWeight : 'bold'}}>Filters : </span>
                <select name="diet" className="form-control mx-1" onChange={e => setDietLabel(e.target.value)} style={{maxWidth : 'fit-content'}}>
                    <option value="">Diet</option>
                    <option value="balanced">Balanced</option>
                    <option value="high-fiber">High Fiber</option>
                    <option value="high-protein">High Protein</option>
                    <option value="low-carb">Low Carb</option>
                    <option value="low-fat">Low Fat</option>
                    <option value="low-sodium">Low Sodium</option>
                </select>
                <select name="health" className="form-control mx-1" onChange={e => setHealthLabel(e.target.value)} style={{maxWidth : 'fit-content'}}>
                    <option value="">Health</option>
                    <option value="vegan">Vegan</option>
                    <option value="dairy-free">Dairy Free</option>
                    <option value="egg-free">Egg Free</option>
                    <option value="fish-free">Fish Free</option>
                    <option value="fat-free">Fat Free</option>
                    <option value="wheat-free">Wheat Free</option>
                    <option value="alcohol-free">Alcohol Free</option>
                    <option value="gluten-free">Gluten Free</option>
                    <option value="peanut-free">Peanut Free</option>
                    <option value="keto-friendly">Keto Friendly</option>
                    <option value="low-sugar">Low Sugar</option>
                </select>
            </div>
            <div className="loader-wrapper d-flex justify-content-center">
                <div className="loader"></div>
            </div>
        </div>
    )
}

export default SearchBar;