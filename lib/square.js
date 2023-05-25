const Shapes = require("./shapes");

class Square extends Shapes{
    constructor() {
        super();
        this.shape = "Square"
    }

    render(){
        return `<rect x="25" y="25" width="250" height="150" fill="${this.color}" />`;
    }
}

module.exports = Square;