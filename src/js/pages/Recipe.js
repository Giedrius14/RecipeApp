import React from "react";

export default class Recipe extends React.Component {
    render() {
        const { query } = this.props.location;

        console.log("Recipe Details "+query);
        return (
            <div>
                Recipe Details
            </div>
        );
    }
}
