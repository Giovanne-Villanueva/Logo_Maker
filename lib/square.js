const Shapes = require("./shapes");

class Square extends Shapes{
    constructor() {
        super();
        this.shape = "Square"
    }

    render(){
        return `<square x="150" y="100" width="80" height="80" fill="${this.color}" />`;
        //<rect x="10" y="10" width="30" height="30"/>
    }
}

module.exports = Square;