import React from "react";
import RecipeComponent from "../components/RecipeComponent";
import RecipeService from "../services/Recipe-service"

export default class Home extends React.Component {
    render() {
        let recipeService = new RecipeService();
        let recipes = recipeService.getRecipes().map((recipe, i) => <RecipeComponent key={i} recipe={recipe}/>);

        return (
            <div>
                <div class="row">{recipes}</div>
            </div>
        );
    }
}