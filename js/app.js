function Item(itemName, filePath){
  this.itemName = itemName;
  this.filePath = filePath;
  this.clicks = 0;
  this.clickCount = 0;
};

var items = [new Item('bag', '../img/bag.jpg'),
  new Item('banana', '../img/banana.jpg'),
  new Item('boots', '../img/boots.jpg'),
  new Item('chair', '../img/chair.jpg'),
  new Item('cthulhu', '../img/cthulhu.jpg'),
  new Item('dragon', '../img/dragon.jpg'),
  new Item('pen', '../img/pen.jpg'),
  new Item('scissors', '../img/scissors.jpg'),
  new Item('shark', '../img/shark.jpg'),
  new Item('sweep', '../img/sweep.png'),
  new Item('unicorn','../img/unicorn.jpg'),
  new Item('usb', '../img/usb.gif'),
  new Item('water', '../img/water-can.jpg'),
  new Item('wine', '../img/wine-glass.jpg'),];

var image = [];
var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var img3 = document.getElementById('image3');

 function displayImages(){
    image[0] = Math.floor(Math.random() * items.length);
  img1.src = items[image[0]].filePath;

    image[1] = Math.floor(Math.random() * items.length);
  while (image[1] === image[0])  {
    image[1] = Math.floor(Math.random() * items.length);
  }
  img2.src = items[image[1]].filePath;

  image[2] = Math.floor(Math.random() * items.length);
  while (image[2] === image[0] || image[2] === image[1]) {
    image[2] = Math.floor(Math.random() * items.length);
  }
  img3.src = items[image[2]].filePath;
  console.log(image[0]);
  console.log(image[1]);
  console.log(image[2]);
}
displayImages();

img1.setAttribute('src', items[image[0]].filePath);
img2.setAttribute('src', items[image[1]].filePath);
img3.setAttribute('src', items[image[2]].filePath);
img1.addEventListener('click', handleClick);
img2.addEventListener('click', handleClick);
img3.addEventListener('click', handleClick);

var totalClicks = 0;

function handleClick(event) {
  if (event.path[0].id === 'image1'){
    items[image[0]].clicks += 1;
  }
  else if(event.path[0].id === 'image2'){
    items[image[1]].clicks += 1;
  }
  else{
    items[image[2]].clicks += 1;
  }
  items[image[0]].clickCount += 1;
  items[image[1]].clickCount += 1;
  items[image[2]].clickCount += 1;
  totalClicks += 1;
  if (totalClicks === 3) {
    resButton.removeAttribute('hidden');
  }
  displayImages();
  makeClicksArray();
}

var resButton = document.getElementById('result');
var resButtonClicks = 0;
resButton.addEventListener('click', resClick);

function resClick(event) {
  resButtonClicks += 1;
  var results = document.getElementById('resultsBox');
  results.removeAttribute('hidden');
}

var clicksChartArray = [];
function makeClicksArray(){
  clicksChartArray = [];
    for (var i = 0; i < items.length; i++){
      clicksChartArray.push(items[i].clickCount)
    }
}


// var data = {
//     labels:[];
// }
