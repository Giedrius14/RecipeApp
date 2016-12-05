import React from "react";

import RecipeComponent from "../components/RecipeComponent";

export default class Home extends React.Component {
  render() {
    const Recipes = [
      "Some recipe",
      "Some Other recipe",
      "Yet Another recipe",
      "Some recipe",
      "Some Other recipe",
      "Yet Another recipe",
      "Some recipe",
      "Some Other recipe",
      "Yet Another recipe",
    ].map((title, i) => <RecipeComponent key={i} title={title}/> );

    console.log("home");
    return (
      <div>
        <div class="row">{Recipes}</div>
      </div>
    );
  }
}