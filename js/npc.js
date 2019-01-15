//-----THE NPC------


function CNpc(name, age, items_to_give) {

  this.name = name;
  this.age = age;
  this.items_to_give = items_to_give;

  console.log("hello my name is " + this.name + " my age is " + this.age + "  and i give you " + this.items_to_give);

}

let NPC = new CNpc("zip", 18, ["ziper", "rits"]);





console.log("--------------------------------------------------")
