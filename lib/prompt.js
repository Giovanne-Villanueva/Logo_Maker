const inquirer = require("inquirer");
const fs = require("fs/promises");
const { svg } = require("./svg");
const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");

class Prompt{

    constructor(){
        this.object = "";
    }
    run(){
        return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of your shape?',
                name: 'text',
            },
            {
                type: 'list',
                choices: ['Circle', 'Square', 'Triangle'],
                message: 'Please pick a shape:',
                name: 'shape',
            },
            {
                type: 'input',
                message: 'Please enter in a color either by keyword or Hexadecimal format?',
                name: 'color',
            }
        ])
        .then(response =>{
            this.createShape(response.text, response.shape, response.color)
            this.makeAnother()
        })
    }

    makeAnother(){
        return inquirer
        .prompt(
            {
                type: 'confirm',
                message: 'Do you want to continue?',
                name: 'continue',
            }
        )
        .then(response=>{

            fs.writeFile(`./dis/${this.object.text}.svg`, svg(this.object.text, this.object.render()))
            
            if(response.continue)this.render()
        })
        .then(()=>{
            console.log("We have made your shape(s) Successfully\n Please check the dis folder in this directory to see your shapes.")
        })
        .catch((error)=>{
            console.log(error);
            console.log("Something went wrong here");
        })
    }

    createShape(text, shape, color){
        if(shape === "Triangle") {
            this.object = new Triangle();
        }
        else if(shape === "Circle"){
            this.object = new Circle();
        }
        else{
            this.object = new Square();
        }

        this.object.addColor(color)
        this.object.addText(text)
    }
}

module.exports = Prompt;