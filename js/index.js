

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













//-----BONUS CODE------

let leaveButton = document.querySelector(".leave");

leaveButton.addEventListener("click", leavePage);

function leavePage(){
  let leaveParent = leaveButton.closest(".page");
  leaveParent.style.display = ("none");
}
