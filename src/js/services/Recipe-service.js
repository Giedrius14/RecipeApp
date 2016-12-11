import {Recipe} from "../model/Recipe";

export default class RecipeService {
    constructor(){
    }
    getRecipes(){
        return [
            new Recipe(1,"pica","gaminimas",['tesla','suris','mesa']),
            new Recipe(2,"pica","gaminimas",['tesla','suris','mesa']),
            new Recipe(3,"pica","gaminimas",['tesla','suris','mesa'])
        ];
    }

    getRecipeById(id){
        return this.getRecipes().find(recipe => recipe.id === parseInt(id))
    }
}