/**
 * Created by gsvazinskas on 12/5/2016.
 */
var recipe = {
    name: "",
    description: "",
    ingredients: [],
    //For inheritance
    create: function(values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(function(key) {
            instance[key] = values[key];
        });
        return instance;
    },
    toString: function() {
        console.log(this);
    }
};