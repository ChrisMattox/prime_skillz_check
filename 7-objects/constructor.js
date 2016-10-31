// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

function RightTriangle(side1, side2, base) {
  this.side1 = side1;
  this.side2 = side2;
  this.base = base;

  function perimeter(side1, side2, side3) {
    (side1 + side2 + side3)/2;
    return perimeter;
  }

  function area() {
  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
  }
}


// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.

var isosceles = new RightTriangle(23, 56, 32);
var obtuse = new RightTriangle(95, 32, 49);

console.log(isosceles.perimeter());
console.log(obtuse.area());
