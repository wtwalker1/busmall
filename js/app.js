'use strict';
console.log('app js connected');

let allImagesTag = document.getElementById('all_images');
let leftImageTag = document.getElementById('left_image');
let middleImageTag = document.getElementById('middle_image');
let rightImageTag = document.getElementById('right_image');

let totalClicks = 0;

let leftImageOnPage = null;
let middleImageOnPage = null;
let rightImageOnPage = null;

const ProductPicture = function(name, imageSrc, clicks, timeShown){
  this.name = name;
  this.imageSrc = imageSrc;
  this.clicks = 0;
  this.timesShown = 0;
  ProductPicture.allImages.push(this);
};
ProductPicture.allImages = [];

const renderNewProducts = function(leftIndex, middleIndex, rightIndex){
  leftImageTag.src = ProductPicture.allImages[leftIndex].imageSrc;
  middleImageTag.src = ProductPicture.allImages[middleIndex].imageSrc;
  rightImageTag.src = ProductPicture.allImages[rightIndex].imageSrc;
};

const pickNewProducts = function() {
  const leftIndex = Math.floor(Math.random() * ProductPicture.allImages.length);
  console.log('left index for left image', leftIndex);

  let leftIndex;
  do {
      leftIndex = Math.floor(Math.random() * ProductPicture.allImages.length)
  } while (rightIndex === leftIndex);
  console.log(ProductPicture.allImages[leftIndex].name + ' and ' + ProductPicture.allImages[middleIndex] + ' and ' + ProductPicture.allImages[rightIndex].name);


  leftImageOnPage = ProductPicture.allImages[leftIndex];
  middleImageOnPage = ProductPicture.allImages[middleIndex];
  rightImageOnPage = ProductPicture.allImages[rightIndex];

  renderNewProducts(leftIndex, middleIndex, rightIndex);

};


const handleClickOnProduct = function(event) {
    console.log('clicking on the picture', event.target);

    if (totalClicks < 25) {
        const thingWeClickedOn = event.target;
        const id = thingWeClickedOn.id;

        if (id === 'left_image') || id === 'middle_image' || id === 'right_image') {
        if (id === 'left_image') {
            leftImageOnPage.click++;
        }
        if (id === 'middle_image') {
            middleImageOnPage.clicks++;
        }
        if (id === 'right_image') {
            rightImageOnPage.clicks++;
        }

        leftImageOnPage.timesShown++;
        middleImageOnPage.timesShown++;
        rightImageOnPage.timesShown++;

        pickNewProducts();
    }
  }

  totalClicks++;
  console.log(totalClicks);
  if (totalClicks === 5) {
    allImagesTag.removeEventListener('click', handleClickOnProduct);
  }
};


allImagesTag.addEventListener('click', handleClickOnProduct);


new ProductPicture('R2D2 Suitcase', 'assets/bag.jpeg');
new ProductPicture('Banana Slicer', 'assets/banana.jpeg');
new ProductPicture('Ipad Toilet Paper Holder', 'assets/bathroom.jpeg');
new ProductPicture('Open Toe Rain Boots', 'assets/boots.jpeg');
new ProductPicture('Ultimate Breakfast Maker', 'assets/breakfast.jpeg');
new ProductPicture('Meatball Bubblegum', 'assets/bubblegum.jpeg');
new ProductPicture('Abstract Chair', 'assets/chair.jpeg');
new ProductPicture('Cthulhu Action Figure', 'assets/cthulhu.jpeg');
new ProductPicture('Dog Ducklips', 'assets/dog-duck.jpeg');
new ProductPicture('Dragon Meat', 'assets/dragon.jpeg');
new ProductPicture('Utensil Pen Caps', 'assets/pen.jpeg');
new ProductPicture('Pet Sweep', 'assets/pet-sweet.jpeg');
new ProductPicture('Pizza Scissors', 'assets/scissors.jpeg');
new ProductPicture('Shark Sleeping Bag', 'assets/shark.jpeg');
new ProductPicture('Baby Sweeper Onesie', 'assets/sweep.png');
new ProductPicture('Taun Taun Sleeping Pad', 'assets/tauntaun.jpeg');
new ProductPicture('Unicorn Meat', 'assets/unicorn.jpeg');
new ProductPicture('Infinite Water Can', 'assets/water-can.jpeg');
new ProductPicture('Wine Glass', 'assets/wine-glass');

leftImageOnPage = ProductPicture.allImages[0];
middleImageOnPage = ProductPicture.allImages[1];
rightImageOnPage = ProductPicture.allImages[2];

pickNewProducts();

// As a user, I would like to display three unique products by chance so that the viewers can pick a favorite.

// Create a constructor function that creates an object associated with each product, and has the following properties:
// Name of the product
// File path of image
// Times the image has been shown
// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
// For each of the three images, increment its property of times it has been shown by one.

// Attach an event listener to the section of the HTML page where the images are going to be displayed.

// Once the users ‘clicks’ a product, generate three new products for the user to pick from.
// As a user, I would like to track the selections made by viewers so that I can determine which products to keep for the catalog.
// In the constructor function define a property to hold the number of times a product has been clicked.

// After every selection by the viewer, update the newly added property to reflect if it was clicked.

// As a user, I would like to control the number of rounds a user is presented with so that I can control the voting session duration.
// By default, the user should be presented with 25 rounds of voting before ending the session.
// Keep the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
// As a user, I would like to view a report of results after all rounds of voting have concluded so that I can evaluate which products were the most popular.
// Create a property attached to the constructor function itself that keeps track of all the products that are currently being considered.

// After voting rounds have been completed, remove the event listeners on the product.

// Add a button with the text View Results, which when clicked displays the list of all the products followed by the votes received, and number of times seen for each. Example: banana had 3 votes, and was seen 5 times.

// NOTE: Displayed product names should match the file name for the product. Example: the product represented with dog-duck.jpg should be displayed to the user as exactly “dog-duck” when the results are shown.

