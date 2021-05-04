function Shape(){

}
Shape.prototype.draw=function(){
    return "i am generic shape"
}

function Circle(radius){
    console.log(radius)
}
Circle.prototype=object.create(Shape.prototype)
Circle.prototype.draw=function(){
    return "i am a Circle"
}
function Squire(){}
Squire.prototype=object.create()(Shape.prototype)
Squire.prototype.draw=function(){
    return "i am Square"
}
function Trangle(){}

Trangle.prototype = object.create(Shape.prototype)
Trangle.prototype.draw=function(){
    return "i am a Trangle"
}
var sharps=[newCircle(),newSquare,new Trangle()]
sharps.forEach(function(sample){
    console.log(function(shape{

        console.log(sharp.draw()
    }})
   