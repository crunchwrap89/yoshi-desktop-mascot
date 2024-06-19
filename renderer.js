const gifElement = document.getElementById('movingGif');

function moveGifRandomly() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const randomX = Math.floor(Math.random() * (windowWidth - gifElement.clientWidth));
  const randomY = Math.floor(Math.random() * (windowHeight - gifElement.clientHeight));

  gifElement.style.left = `${randomX}px`;
  gifElement.style.top = `${randomY}px`;
}

setInterval(moveGifRandomly, 1000);

