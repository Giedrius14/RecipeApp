import React from "react";
import RecipeService from "../services/Recipe-service"
import RecipeDetailComponent from "../components/RecipeDetailComponent"

export default class Recipe extends React.Component {
    render() {
        // const { query } = this.props.location;
        // console.log("Recipe Details ",query);
        const { id } = this.props.params;

        let recipeService = new RecipeService();
        let recipe = recipeService.getRecipeById(id);

        return (
            <div>
                <RecipeDetailComponent key={id} recipe={recipe}/>
            </div>
        );
    }
}

