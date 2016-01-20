function Item(itemName, filePath){
  this.itemName = itemName;
  this.filePath = filePath;

};

var items = [
  new Item('bag', '../img/bag.jpg'),
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
  new Item('wine', '../img/wine-glass.jpg'),
];

var image = [];
var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var img3 = document.getElementById('image3');

 function displayImages(){
    image[0] = Math.floor(Math.random() * (items.length));
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



 //    image[1] = Math.floor(Math.random() * (items.length));
 //    document.getElementById('image2').src = this.filePath[randImg];
 //    return true;
 //  }
 //
 //    image[2] = Math.floor(Math.random() * (items.length));
 //    document.getElementById('image3').src = this.filePath[randImg];
 //    return true;
 //  }
 //
 //  Item.prototype.render = function(){
 //    this.displayLeft();
 //    this.displayCenter();
 //    this.displayRight();
 //  }
 //
 // for(i = 0; i < items.length; i++) {
 //
 // }





// var usedImg = {};
// var imgCount = 0;
//
// function displayImg(){
//   var image = Math.floor(Math.random() * (images.length));
//   if(!usedImg[image]){
//     document.image.src = images[image];
//     usedImg[image] = true;
//     imgCount++;
//     if (imgCount === images.length){
//       imgCount = 0;
//       usedImg = {};
//     }
//   }
//     else {
//       displayImg();
//     }
//   }


//   var usedImgCenter = {};
//   var imgCenterCount = 0;
//
// function displayImgCenter(){
//   var img1 = Math.floor(Math.random() * (images.length));
//   if(!usedImgCenter[img1]){
//     document.imgCenter.src = images[img1];
//     usedImgCenter[img1] = true;
//     imgCenterCount++;
//     if (imgCenterCount === images.length){
//       imgCenterCount = 0;
//       usedImgCenter = {};
//     }
//   }
//     else {
//       displayImgLeft();
//     }
//   }
//
//   var usedImgRight = {};
//   var imgRightCount = 0;
//
//   function displayImgRight(){
//     var img1 = Math.floor(Math.random() * (images.length));
//     if(!usedImgRight[img1]){
//       document.imgRight.src = images[img1];
//       usedImgRight[img1] = true;
//       imgRightCount++;
//       if (imgRightCount === images.length){
//         imgRightCount = 0;
//         usedImgRight = {};
//       }
//     }
//       else {
//         displayImgRight();
//       }
//     }
