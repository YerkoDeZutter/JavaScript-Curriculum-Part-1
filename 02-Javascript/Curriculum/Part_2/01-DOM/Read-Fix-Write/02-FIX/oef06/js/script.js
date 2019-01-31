let episodes = document.querySelectorAll(`.episode-item`);

const sortEpisodeByTitle = ($a, $b) => {
  const titleA = $a;
  const titleB = $b;
  if(titleA < titleB){
    return -1;
  }
  if(titleA > titleB){
    return 1;
  }
  return 0;
};

let epT = [];

episodes.forEach($ep =>{ epT.push($ep.querySelector(`.episode-title`).textContent) })

epT.sort(sortEpisodeByTitle);

epT.forEach($ep => console.log($ep.toLowerCase().slice(1)));
