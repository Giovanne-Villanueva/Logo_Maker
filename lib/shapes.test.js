const Shapes = require("./shapes");
const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");


describe('Shapes', ()=>{
    describe('Set methods', ()=>{
      it('If we use the set methods in Shapes class to set data for the Shapes object\n      We should see that data in the shapes object', ()=>{
        const shape = new Shapes();
        shape.addColor('blue');
        shape.addShape('circle');
        shape.addText('GOT');
        expect(shape.color).toEqual('blue');
        expect(shape.shape).toEqual('circle');
        expect(shape.text).toEqual('GOT');
      });
    });

    describe('Circle rendering', () =>{
      it('We should be able to make a circle svg assuming we set a color ahead of time', ()=>{
        const circle = new Circle();
        circle.addColor('blue');
        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
      });
    });

    describe('Triangle rendering', () =>{
      it('We should be able to make a triangle svg assuming we set a color ahead of time', ()=>{
        const triangle = new Triangle();
        triangle.addColor('blue');
        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
      });
    });

    describe('Square rendering', () =>{
      it('We should be able to make a square svg assuming we set a color ahead of time', ()=>{
        const square = new Square();
        square.addColor('blue');
        expect(square.render()).toEqual(`<rect x="25" y="25" width="250" height="150" fill="blue" />`);
      });
    });
})
