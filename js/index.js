//-----THE NPC------


function CNpc(name, age, items_to_give){

  this.name = name;
  this.age = age;
  this.items_to_give = items_to_give;

  console.log("hello my name is " + this.name);
  console.log("my age is " + this.age);
  console.log("and the i get is " + this.items_to_give);

}

let character = new CNpc("zip", 18, ["ziper", "rits"]);






//-----THE SHOP------

function shop(naam, physic, magic, minLevel, available){

  this.naam = naam;
  this.physic = physic;
  this.magic = magic;
  this.minLevel = minLevel;
  this.available = available;

  // if(this.available){
  //   console.log(this.naam + " " + this.physic + " " + this.magic + " " + this.minLevel + " " + this.available);
  // }

  if(this.minLevel > 9){
    console.log(this.naam + " " + this.physic + " " + this.magic + " " + this.minLevel + " " + this.available);
  }

}

let tekoop = [];

for( var i = 0 ; i < 5 ; i++ ){
  tekoop.push(new shop("shrunken heads", 11, 12, 1, true))
}

for( var i = 0 ; i < 5 ; i++ ){
  tekoop.push(new shop("axe", 110, 120, 10, false))
}





//-----THE PLAYER -----
function CChar(name, level, life, weapon, attack){



}

function attack(){
  console.log(weapon.name + " " + weapon.damage)
}

let mainCharacter = new CChar("cap", 5, 77, weapon = {name : "sword", damage : 8}, this.attack());

//new weapon("sword", 8)
