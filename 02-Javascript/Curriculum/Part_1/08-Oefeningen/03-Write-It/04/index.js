const actors = [
  {
    actor: "Forest Whitaker",
    film: "The Last King of Scotland",
    age: 45
  }, {
    actor: "Daniel Day-Lewis",
    film: "There Will Be Blood",
    age: 50
  }, {
    actor: "Sean Penn",
    film: "Milk",
    age: 48
  }, {
    actor: "Jeff Bridges",
    film: "Crazy Heart",
    age: 60
  }, {
    actor: "Colin Firth",
    film: "The King's Speech",
    age: 50
  }, {
    actor: "Jean Dujardin",
    film: "The Artist",
    age: 39
  }, {
    actor: "Daniel Day-Lewis",
    film: "Lincoln",
    age: 55
  }, {
    actor: "Matthew McConaughey",
    film: "Dallas Buyers Club",
    age: 44
  }, {
    actor: "Eddie Redmayne",
    film: "The Theory of Everything",
    age: 33
  }, {
    actor: "Leonardo DiCaprio",
    film: "The Revenant",
    age: 41
  }
]

function compare(a,b) {
  if (a.actor < b.actor)
    return -1;
  if (a.actor > b.actor)
    return 1;
  return 0;
}

// console.log(actors[0].actor)

actors.forEach(actor => {
  let split = actor.actor.indexOf(" ");
  actor.actor = actor.actor.slice(split);
})

actors.sort(compare);

const wrapWithTag = (content, tagname) =>
  `<${tagname}>${content}</${tagname}>`;


document.write(`<ol>`);
actors.forEach(actor => document.write(wrapWithTag(actor.actor, `li`)));
document.write(`</ol>`);
