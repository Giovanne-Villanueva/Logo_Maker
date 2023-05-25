const inquirer = require("inquirer");
const fs = require("fs/promises");
const { svg } = require("./svg");
const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");

class Prompt{

    constructor(){
        this.object = "";
        this.color = [];
        this.hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    }
    run(){
        return inquirer
        .prompt([
            {
                type: 'input',
                message: '(Three characters length long)\nWhat is the name of your shape?',
                name: 'text',
                validate: (input)=>{
                    
                    if(input.length > 3){
                        console.log("Please put in a name 3 characters long only")
                        return false;
                    }
                    else{
                        return true;
                    }
                }
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
                validate: (input)=>{
                    //console.log("\n"+input)
                    if(input[0] !== '#'){
                        for(let j=1; j< input.length; j++){
                            if(!this.alphabet.includes(input[j].toLowerCase())){
                                console.log("Please put in a proper input for color")
                                return false;
                            }
                        }
                        return true;
                    }
                    else if( (input.length <= 7) && (input[0] === '#')){
                        for(let i=1; i< input.length; i++){
                            if(!this.hexValues.includes(input[i].toUpperCase())){
                                console.log("Please put in a proper input for color")
                                return false;
                            }
                        }
                        return true
                    }
                    else return true;
                }
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
            if(response.continue){this.run()}
            
        })
        .then(()=>{
            console.log(`\nWe have made your shape(s) Successfully its called ${this.object.text}.svg\nPlease check the dis folder in this directory to see shape(s) created.\n`)
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