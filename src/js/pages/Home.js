import React from "react";

import RecipeComponent from "../components/RecipeComponent";
import {Recipe} from "../model/Recipe";

export default class Home extends React.Component {
  render() {

      const recipes = [
          new Recipe("pica","gaminimas",['tesla','suris','mesa']),
          new Recipe("pica","gaminimas",['tesla','suris','mesa']),
          new Recipe("pica","gaminimas",['tesla','suris','mesa'])
      ].map((recipe, i) => <RecipeComponent key={i} recipe={recipe}/> );

    console.log("home");
    return (
      <div>
        <div class="row">{recipes}</div>
      </div>
    );
  }
}