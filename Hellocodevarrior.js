/*
Hello Happy Codevarrior!

VVhat ?!?
None of zese codevarriors seemz to remember hiz ovvn name !
Kould you help ?
*/

function Warrior(n){
  var name = n;
  this.name = function(n){
    if( n ) name=n;
    return name;
  }  
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}