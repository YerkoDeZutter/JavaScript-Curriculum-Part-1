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

tekoop.push(new shop("big sword", 200, 20, 9, false))
tekoop.push(new shop("big wand", 19, 300, 11, true))
tekoop.push(new shop("sandwitch", 1000, 1000, 20, true))





//-----THE PLAYER -----




let mainCharacter = {
  name : prompt("Please enter your name", "capie"),
  level : 5,
  life : 77,
  weapon : {name : "sword", damage : 8},

  attack : function(){
      let CurentDamage = mainCharacter.level * mainCharacter.weapon.damage;
      console.log(mainCharacter.name + " aanval met het wapen " + mainCharacter.weapon.name + " de schade is " + CurentDamage);
      console.log("enemyhealth went from " + enemy.life + " to " + (enemy.life - CurentDamage))
      enemy.life = enemy.life - CurentDamage;
      enemy.attack();
    }
}





//-----THE ENEMY-----

let enemy = {
  name : "map",
  level : 4,
  life : 46,
  weapon : {name : "sword", damage : 5},

  attack : function(){
    let CurentDamage = enemy.level * enemy.weapon.damage;
      console.log(enemy.name + " aanval met het wapen " + enemy.weapon.name + " de schade is " + CurentDamage);
      console.log("enemyhealth went from " + mainCharacter.life + " to " + (mainCharacter.life - CurentDamage));
      mainCharacter.life = mainCharacter.life - CurentDamage;
    }
}



// window.addEventListener("click", mainCharacter.attack());
mainCharacter.attack()
