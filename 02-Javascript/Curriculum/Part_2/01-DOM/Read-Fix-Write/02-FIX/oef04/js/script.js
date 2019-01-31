const episodes = document.querySelectorAll(`.episode-title`);
const $currentEpisode = document.querySelectorAll(`.subtitle`);
const currentTitle = $currentEpisode[0].textContent;
$currentEpisode[0].classList.add("highlight")

episodes.forEach($episode => {
  if ($episode.textContent === currentTitle) {
    $episode.classList.add(`highlight`);
  }
});
