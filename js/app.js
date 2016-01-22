function Item(itemName, filePath){
  this.itemName = itemName;
  this.filePath = filePath;
  this.clicks = 0;
  this.clickCount = 0;
  this.originalIndex = originalIndex++;
};
if (localStorage.getItem('totalClicks')){
  var items = JSON.parse(localStorage.getItem('itemsArray'));
  console.log('items array is');
  console.log(items);
} else {
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
}

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

if (localStorage.getItem('totalClicks')){
  var totalClicks = +localStorage.getItem('totalClicks');
  console.log('totalClicks is ');
  console.log(totalClicks);
} else {
  var totalClicks = 0;
}

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
  localStorage.setItem('itemsArray', JSON.stringify(items));
  localStorage.setItem('totalClicks', totalClicks);
}

var clicksChartArray = [];
function makeClicksArray(){
  clicksChartArray = [];
    for (var i = 0; i < items.length; i++){
      clicksChartArray.push(items[i].clickCount)
    }
}

var data = {
    labels: [],
    datasets: [
        {
            label: "Times Item is Shown",
            fillColor: "#ff7070",
            strokeColor: "#ff7070",
            highlightFill: "#ff7070",
            highlightStroke: "rgba(220,220,220,1)",
            data: []
        },
        {
            label: "Times Item is Clicked",
            fillColor: "#6b98e5",
            strokeColor: "#6b98e5",
            highlightFill: "#6b98e5",
            highlightStroke: "rgba(151,187,205,1)",
            data: []
        }
    ]
};

function newChartData(){
  for (var d = 0; d < items.length; d++){
    data.labels.push('0');
    data.datasets[0].data.push('0');
    data.datasets[1].data.push('0');
  }
}
newChartData();
var chartCanvas = document.getElementById('chartCanvas').getContext('2d');
var chartMe = new Chart(chartCanvas).Bar(data);
var clearsLS = document.getElementById('lsClear');


var resButton = document.getElementById('result');
var resButtonClicks = 0;
resButton.addEventListener('click', resClick);

var originalIndex = 0;

function resClick(event) {
  resButtonClicks += 1;
  var results = document.getElementById('resultsBox');
  results.removeAttribute('hidden');

  items.sort(function (a, b) {return b.clicks - a.clicks;});
    for(var i = 0; i < items.length; i++)
    {
      data.labels[i] = items[i].itemName;
      chartMe.datasets[0].bars[i].value = items[i].clicks;
      chartMe.datasets[1].bars[i].value = items[i].clickCount;
    }
    chartMe.update();
    items.sort(function (a, b) {return a.originalIndex - b.originalIndex;});
  }


localStorage.setItem('num', 3);
function clearLS(){
  localStorage.clear();
}
clearButton = document.getElementById('clearLS');
clearButton.addEventListener('click', clearLS);
