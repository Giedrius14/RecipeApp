import React from "react";
import IngredientComponent from "./IngredientComponent";

export default class IngredientListComponent extends React.Component {
    render() {
        var ingredients = this.props.list;
        return (
            <div>
                {ingredients.map((val,i) =>
                    <IngredientComponent key={i} ingredient={val}/>
                )}
            </div>
    );
    }
}