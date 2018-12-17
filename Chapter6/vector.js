

//Example 1
function Vector(x,y) {
  this.x = x;
  this.y = y;      
}

//For addition
Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
};

//For subtraction
Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
};