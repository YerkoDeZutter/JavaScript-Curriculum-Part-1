const episodes = document.querySelectorAll(`.episode-writer`);
console.log(episodes);
episodes.forEach($director => {
  if ($director.textContent !== `Freddy Lamarr`) {
    $director.parentNode.parentNode.remove();
  }
});
