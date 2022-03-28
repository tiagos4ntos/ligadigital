function generateRA() {
  let year = new Date().getFullYear();

  return year.toString() + getRandomInt(1, 1000).toString().padStart(5, '0');
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports=generateRA