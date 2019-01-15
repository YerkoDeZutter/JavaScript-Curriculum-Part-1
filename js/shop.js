//-----THE SHOP------

function shop(naam, physic, magic, minLevel, available) {

  this.naam = naam;
  this.physic = physic;
  this.magic = magic;
  this.minLevel = minLevel;
  this.available = available;

  //---CREAT SPRITES---

  let div = document.createElement("div");
  this.div = div;
  this.div.className = "shop-item";
  this.div.style.backgroundImage = "url('img/" + this.naam + ".png')";

  document.getElementById("shop-choices").appendChild(div);

}

let tekoop = [];

for (var i = 0; i < 5; i++) {
  tekoop.push(new shop("shrunken_heads", 11, 12, 1, true))
}

for (var i = 0; i < 5; i++) {
  tekoop.push(new shop("axe", 110, 120, 10, false))
}

tekoop.pop();

tekoop.push(new shop("big_sword", 200, 20, 9, false))
tekoop.push(new shop("big_wand", 19, 300, 11, true))
tekoop.push(new shop("sandwitch", 1000, 1000, 20, true))

for (var i = 0; i < tekoop.length; i++) {
  if (tekoop[i].minLevel > 9) {
    console.log(tekoop[i].naam + " " + tekoop[i].physic + " " + tekoop[i].magic + " " + tekoop[i].minLevel + " " + tekoop[i].available);
  }
}




console.log("--------------------------------------------------")
