
 // Images for the Print Page rollover
var PrintButton1 = new Image();
var PrintButton2 = new Image();

PrintButton1.src = "Images/Print1.jpg";
PrintButton2.src = "Images/Print2.jpg";

// Images for the Logo rollover
var logo1 = new Image();
var logo2 = new Image();

logo1.src = "Images/Logo1.png";
logo2.src = "Images/Logo2.png";

// Large images for the image swap
var imgArray = [
    "Image1Lg.jpg",
    "Image2Lg.jpg",
    "Image3Lg.jpg",
    "Image4Lg.jpg"
];

// Titles for each cooking image
var titleArray = [
    "Pasta Ingredients",
    "Jello Cake",
    "Grilled Vegetables",
    "Chef Cooking"
];

// Folder containing the large images
var imgPath = "Images/fullsize/";

// Change large image and title on hover
function swapImage(imgID) {

    var theImage = document.getElementById("theImage");
    var textDiv = document.getElementById("bottomText");

    var newImg = imgArray[imgID];
    var textTitle = titleArray[imgID];

    theImage.src = imgPath + newImg;
    theImage.alt = textTitle;
    textDiv.textContent = textTitle;
}

// Preload rollover and large images
function preloadImages() {

    for (var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];
    }
}
