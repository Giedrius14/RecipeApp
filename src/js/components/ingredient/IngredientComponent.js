import React from "react";

export default class IngredientComponent extends React.Component {
    render() {
        var ingredient = this.props.ingredient;
        return (
            <li>{ingredient}</li>
        );
    }
}
