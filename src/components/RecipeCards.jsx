import React from 'react';

const RecipeCards = (props) => {
    
    const recipe = props.recipe;
    const {label, image, ingredientLines, cuisineType, url, mealType, cautions} = recipe;

    const handleClick = () => {
        window.open(url);
    }

    const capitalize = {textTransform : 'capitalize'};

    // const label = 'Anda Bhurji'
    // const image = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Gallet_clamshell_600x600_1.jpg'
    // const ingredientLines = ["Allooo", "Pyaaj", "Tamatar", "Mirchi", "Dhaniya", "Lahsun", "Adrak", "Achaar" , "Papad"];

    const cornerFolds = {borderBottomLeftRadius : '1rem', borderTopRightRadius : '2rem'};

    return(
        <div onClick={() => handleClick()} className="col-md-6 p-2 my-1" style={cornerFolds}>
            <div className="row glass mx-1 p-1 recipe-card" style={cornerFolds}>
                <div className="p-0 col-md-5 col-5">
                    <img src={image} alt="Failed to Load" className="border bg-warning" width="100%" style={cornerFolds}/>
                </div>
                <div className="pl-1 pr-0 text-white col-md-7 col-7" style={cornerFolds}>
                    <div className="col" style={cornerFolds}>
                        <div className="border-bottom border-success" style={{maxHeight : '12vw', overflow : 'auto'}}>
                            <span className="font-weight-bold">{label}</span>
                        </div>
                        <br/>
                        <div  style={{maxHeight : '25vw', overflow : 'auto'}}>
                            <span style={capitalize}><b>Ingredients Required </b> : {ingredientLines.length}</span> <br />
                            {(cuisineType) ? <span style={capitalize}><b>Cuisine </b> : {cuisineType[0]}</span> : <span></span>} <br />
                            {(mealType) ? <span style={capitalize}><b>Meal </b> : {mealType[0].replace('/', ', ')}</span> : <span></span>} <br />
                            {(cautions) ? <span style={capitalize}><b>Cautions </b> : {cautions[0]}</span> : <span></span> }<br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCards;