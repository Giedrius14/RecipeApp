import React from "react";
import IngredientListComponent from "./ingredient/IngredientListComponent";
import {Link } from "react-router";

export default class RecipeComponent extends React.Component {
    render() {
        let recipe = this.props.recipe;
        console.log(recipe);
        return (
            <div class="col-md-4">
                <h4>{recipe.name}</h4>
                <p>{recipe.description}</p>
                <IngredientListComponent list={recipe.ingredients}/>
                <Link class="btn btn-default" to={'/recipe/'+ recipe.id} >More info</Link>
            </div>
        );
    }
}