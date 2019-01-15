//-----THE NPC------


function CNpc(name, age, items_to_give) {

  this.name = name;
  this.age = age;
  this.items_to_give = items_to_give;

  console.log("hello my name is " + this.name + " my age is " + this.age + "  and i give you " + this.items_to_give);

}

let NPC = new CNpc("zip", 18, ["ziper", "rits"]);





console.log("--------------------------------------------------")
//-----THE SHOP------

function shop(naam, physic, magic, minLevel, available) {

  this.naam = naam;
  this.physic = physic;
  this.magic = magic;
  this.minLevel = minLevel;
  this.available = available;

  // if(this.available){
  //   console.log(this.naam + " " + this.physic + " " + this.magic + " " + this.minLevel + " " + this.available);
  // }

  let div = document.createElement("div");
  this.div = div;
  this.div.className = "shop-item";
  this.div.innerHTML = "Hello";

document.getElementById("shop").appendChild(div);

}

let tekoop = [];

for (var i = 0; i < 5; i++) {
  tekoop.push(new shop("shrunken heads", 11, 12, 1, true))
}

for (var i = 0; i < 5; i++) {
  tekoop.push(new shop("axe", 110, 120, 10, false))
}

tekoop.pop();

tekoop.push(new shop("big sword", 200, 20, 9, false))
tekoop.push(new shop("big wand", 19, 300, 11, true))
tekoop.push(new shop("sandwitch", 1000, 1000, 20, true))

for (var i = 0; i < tekoop.length; i++) {
  if (tekoop[i].minLevel > 9) {
    console.log(tekoop[i].naam + " " + tekoop[i].physic + " " + tekoop[i].magic + " " + tekoop[i].minLevel + " " + tekoop[i].available);
  }
}




console.log("--------------------------------------------------")
//-----THE PLAYER -----


function character(name, level, life, weapon) {

  this.name = name;
  this.level = level;
  this.life = life;
  this.weapon = weapon;

  let opponentCharacter = {
    name: "map",
    level: 4,
    life: 46,
    weapon: {
      name: "sword",
      damage: 5
    }
  }

  this.attack = () => {
    let CurentDamage = this.level * this.weapon.damage;
    console.log(this.name + " attacked " + opponentCharacter.name + " whit a " + this.weapon.name);
    console.log("enemyhealth went from " + opponentCharacter.life + " to " + (opponentCharacter.life - CurentDamage));
    opponentCharacter.life -= CurentDamage;

    console.log("it is enemy's turn");

    CurentDamage = opponentCharacter.level * opponentCharacter.weapon.damage;
    console.log(opponentCharacter.name + " attacked " + this.name + " whit a " + opponentCharacter.weapon.name);
    console.log("enemyhealth went from " + this.life + " to " + (this.life - CurentDamage));
    this.life -= CurentDamage;
  }

}

let mainCharacter = new character("cap", 5, 77, {
  name: "sword",
  damage: 8
});



//-----ACTIVATE-----
// window.addEventListener("click", mainCharacter.attack());
mainCharacter.attack()
