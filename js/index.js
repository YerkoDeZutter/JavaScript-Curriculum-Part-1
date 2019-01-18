

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



  //---ATACK ACTIONS---

  let enemy = document.querySelector(".enemy");

  let textBox = document.querySelector(".text-box")

  let textInBox = document.querySelector("p");

  console.log(textInBox)

  enemy.addEventListener("click", () => {
    let CurentDamageM = this.level * this.weapon.damage;
    console.log(this.name + " attacked " + opponentCharacter.name + " whit a " + this.weapon.name);
    console.log("enemyhealth went from " + opponentCharacter.life + " to " + (opponentCharacter.life - CurentDamageM));
    opponentCharacter.life -= CurentDamageM;

    textBox.style.display = ("block")

    if(opponentCharacter.life < 1){

      enemy.style.display = "none";

      console.log("the enemy had died")

      textInBox.innerHTML = "you dealt " + CurentDamageM + " damage and your enemy died";

    } else {

    console.log("it is enemy's turn");

    CurentDamageE = opponentCharacter.level * opponentCharacter.weapon.damage;
    console.log(opponentCharacter.name + " attacked " + this.name + " whit a " + opponentCharacter.weapon.name);
    console.log("enemyhealth went from " + this.life + " to " + (this.life - CurentDamageE));
    this.life -= CurentDamageE;

    textInBox.innerHTML = "you dealt " + CurentDamageM + " damage and your enemy did " + CurentDamageE + " damage";

    }
  })

}

let mainCharacter = new character("cap", 5, 77, {
  name: "sword",
  damage: 8
});



//-----ACTIVATE-----
// window.addEventListener("click", mainCharacter.attack());
// mainCharacter.attack()
// let enemy = document.querySelector(".enemy");
// enemy.addEventListener("click", mainCharacter.attack(){})













//-----BONUS CODE------

let leaveButton = document.querySelector(".leave");

leaveButton.addEventListener("click", leavePage);

function leavePage(){
  let leaveParent = leaveButton.closest(".page");
  leaveParent.style.display = ("none");
}
