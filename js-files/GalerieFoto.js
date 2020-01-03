
//create array with image sources
var imageSources = [];
imageSources.push("./../images/galery/CB-09-nov-2018-26-150x150.png");
imageSources.push("./../images/galery/CB-09-nov-2018-31-150x150.png");
imageSources.push("./../images/galery/CB-09-nov-2018-41-150x150.png");
imageSources.push("./../images/galery/CB-09-nov-2018-43-150x150.png");
imageSources.push("./../images/galery/CB-09-nov-2018-49-150x150.png");
imageSources.push("./../images/galery/CB-09-nov-2018-51-150x150.png");
imageSources.push("./../images/galery/CB-09-nov-2018-58-150x150.png");
imageSources.push("./../images/galery/CB-09-nov-2018-72-150x150.png");
imageSources.push("./../images/galery/CB-09-nov-2018-75-150x150.png");

//add images into carousel
while (imageSources.length > 0){
    //extract image source
    var imageSource = imageSources.pop();
    //create carousel item
    var carousel = document.getElementById('in-carousel');
    var carouselItem = document.createElement('div');
    carouselItem.setAttribute('class', 'carousel-item');
    //create image element
    var imageElement = document.createElement('img');
    imageElement.setAttribute('src', imageSource);
    imageElement.setAttribute('class', 'd-block w-100');
    imageElement.setAttribute('alt', '...');
    //append image to item and item to carousel
    carouselItem.append(imageElement);
    carousel.append(carouselItem);
}
//set first image as active
carousel.firstElementChild.setAttribute('class', 'carousel-item active');


var xhr = new XMLHttpRequest();

xhr.onload = function () {

    // In xhr.status aflam ce status-code are cererea noastra. In general cele cu 200 sunt bune, iar cele cu 400 si 500 sunt rele.
    if (xhr.status >= 200 && xhr.status < 300) {
        // Daca request-ul a fost facut cu succes
        console.log('success!', xhr);
        console.log("raspunsul pe care il primim este sub forma de string",xhr.response);
        console.log("De cele mai multe ori vrem sa convertim raspunsul la obiect JSON ca sa putem utiliza datele",JSON.parse(xhr.response))
        var jsonParsed = JSON.parse(xhr.response);
        //iterate through 10 first elements of the json array and add them to html code
        for (var i = 0; i < 10 ; i++){
            //get array element representing an image
            var img = jsonParsed[i];
            //crete carousel item
            var carousel = document.getElementById('in-carousel');
            var carouselItem = document.createElement('div');
            carouselItem.setAttribute('class', 'carousel-item');
            //create image element
            var imageElement = document.createElement('img');
            imageElement.setAttribute('src', img['url']);
            imageElement.setAttribute('class', 'd-block w-100');
            imageElement.setAttribute('alt', '...');
            imageElement.setAttribute('title', img['title']);
            //append image to item and item to carousel
            carouselItem.append(imageElement);
            carousel.append(carouselItem);
        }
    } else {
        // Daca avem FAIL (ex: nu exista metoda din backend pe care vrem sa o apelam sau nu avem conexiune la internet etc)
        console.log('The request failed!');
    }
};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos');
xhr.send();


//add audio element

//create element representing source of the audio file
var audioSource = document.createElement('source');
audioSource.setAttribute('src', './../sound/Silent_Strike_-_The_Way_It_Is.mp3');
audioSource.setAttribute('type', 'audio/ogg');
//create audio element
var audioElement = document.createElement('audio');
audioElement.setAttribute('controls', '');
audioElement.append(audioSource);
audioElement.append(document.createTextNode('Your browser does not support the audio element.'));
//add audio element to html code
document.getElementById('content').append(audioElement);