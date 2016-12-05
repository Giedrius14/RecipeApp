import React from "react";
import IngredientComponent from "../components/IngredientComponent";

export default class RecipeComponent extends React.Component {
    render() {
        var recipe = this.props.recipe;
        console.log(recipe);
        return (
            <div class="col-md-4">
                <h4>{recipe.name}</h4>
                <p>{recipe.description}</p>
                    {recipe.ingredients.map((val,i) =>
                        <IngredientComponent key={i} ingredient={val}/>
                    )}
                <a class="btn btn-default" href="#">More Info</a>
            </div>
        );
    }
}