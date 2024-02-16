let clickCount = 0;

function changeColor() {
  clickCount++;
  const heartButton = document.getElementById("heartButton");

  if (clickCount % 2 === 1) {
    heartButton.classList.toggle("clicked");
  } else {
    heartButton.classList.toggle("clicked");
  }
}
