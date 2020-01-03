var rezervariButton  = document.getElementById('rezervari');
// go to formular when button clicked
rezervariButton.addEventListener('click', function () {
    location.href = './../html-pages/Rezervari-form.html';
})

//create label for rating select input
var ratingLabel = document.createElement('label');
ratingLabel.setAttribute('for', 'ratingSelect');
ratingLabel.textContent = 'Rating';
ratingLabel.style.color = 'white';
ratingLabel.style.opacity = '1';
ratingLabel.style.fontSize = '2.8vw';
//create select input
var ratingSelect = document.createElement('select');
ratingLabel.setAttribute('id', 'ratingSelect');
//create options for select input : 1,2,3,4,5
var option1 = document.createElement('option');
option1.setAttribute('name','option1');
option1.textContent = '1';

var option2 = document.createElement('option');
option2.setAttribute('name','option2');
option2.textContent = '2';

var option3 = document.createElement('option');
option3.setAttribute('name','option3');
option3.textContent = '3';

var option4 = document.createElement('option');
option4.setAttribute('name','option4');
option4.textContent = '4';

var option5 = document.createElement('option');
option5.setAttribute('name','option5');
option5.textContent = '5';
//append opting to select element
ratingSelect.append(option1);
ratingSelect.append(option2);
ratingSelect.append(option3);
ratingSelect.append(option4);
ratingSelect.append(option5);
//create button to send ratings
var submitRating = document.createElement('button');
submitRating.textContent = 'Send';
//event listener to send ragins
submitRating.addEventListener('click', function () {
    //remove label, select input and submit button
    ratingLabel.remove();
    ratingSelect.remove();
    this.remove();
    //create and append a message to thank for rating sent
    var thanks = document.createElement('span');
    thanks.append(document.createTextNode('Multumim pentru feedback!'));
    thanks.style.color = 'white';
    thanks.style.opacity = '1';
    thanks.style.fontSize = '2.8vw';
    content.append(thanks);
})

var content = document.querySelector('#content div');
//append label, select input and send button to content
content.append(document.createElement('br'));
content.append(document.createElement('br'));
content.append(ratingLabel);
content.append(document.createElement('br'));
content.append(ratingSelect);
content.append(document.createElement('br'));
content.append(submitRating);


