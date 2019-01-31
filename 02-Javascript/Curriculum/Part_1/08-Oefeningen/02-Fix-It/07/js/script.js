const shows = [
  {
    title: `legion`,
    season: 1,
    score: 94,
  }, {
    title: `sneaky pete`,
    season: 1,
    score: 100,
  }, {
    title: `santa clarita diet`,
    season: 1,
    score: 71,
  }, {
    title: `riverdale`,
    season: 1,
    score: 87,
  }, {
    title: `the young pope`,
    season: 1,
    score: 74,
  }, {
    title: `a series of unfortunate events`,
    season: 1,
    score: 94,
  }, {
    title: `taboo`,
    season: 1,
    score: 78,
  }, {
    title: `colony`,
    season: 2,
    score: 100,
  }, {
    title: `24: legacy`,
    season: 1,
    score: 57,
  }, {
    title: `speechless`,
    season: 1,
    score: 98,
  }, {
    title: `scherlock`,
    season: 4,
    score: 65,
  }, {
    title: `stranger things`,
    season: 1,
    score: 95,
  }, {
    title: `this is us`,
    season: 1,
    score: 89,
  }, {
    title: `timeless`,
    season: 1,
    score: 84,
  }, {
    title: `the oa`,
    season: 1,
    score: 73,
  },
];


function compare(a,b) {
  if (a.score > b.score)
    return -1;
  if (a.score < b.score)
    return 1;
  return 0;
}

shows.sort(compare);

const wrapWithTag = (content, score, tagname) =>
`<${tagname}>${content} (${score})</${tagname}>`;

const topScoreFilter = show => { };

shows.filter(topScoreFilter);

document.write(`<ol>`);
shows.forEach(show => {
  if(show.score >= 90){
  document.write(wrapWithTag(show.title, show.score, `li`))
}
});
document.write(`</ol>`);
