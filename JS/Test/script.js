const figura = document.querySelectorAll(".figura");
const stiliai = window.getComputedStyle(figura);
let plotis = figura.clientWidth;
let aukstis = figura.clientHeight;

if (stiliai.borderRadius == "50%") {
  console.log(`apskritimas`);
  figura.style.backgroundColor = "green";
} else if (plotis == aukstis) {
  if (plotis > 200) {
    console.log(`kvadratas ir didelis`);
    figura.style.backgroundColor = "red";
  } else {
    console.log(`kvadratas ir mazas`);
    figura.style.backgroundColor = "blue";
  }
} else {
  console.log(`staciakampis`);
  figura.style.backgroundColor = "yellow";
}
