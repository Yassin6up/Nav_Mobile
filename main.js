const list = document.querySelectorAll(`.list`);
const indicator = document.getElementById("indicator");

list.forEach((item, index) => {
  item.addEventListener('click', function() {
    list.forEach((item) => item.classList.remove(`active`));
    this.classList.add(`active`);
    // console.log();
    let position = this.getBoundingClientRect();
    console.log(position);
    indicator.style.transform = `translateX(${position.x-(position.width/1.35)}px)`;
    
  })
});
