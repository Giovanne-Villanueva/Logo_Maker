const inquirer = require("inquirer");
const fs = require("fs/promises");

class Shapes{

    constructor () {
        this.text = "";
        this.shape = "";
        this.color = "";
    }

    addColor(color){
        this.color = color;
    }

    addText(text){
        this.text=text;
    }

    addShape(shape){
        this.shape = shape;
    }
    

}

module.exports= Shapes;