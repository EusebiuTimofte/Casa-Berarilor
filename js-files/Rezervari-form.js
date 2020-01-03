// import Swal from 'sweetAlert2';

var content = document.querySelector('body');
//create form element
var form = document.createElement('form');
//create label for email input
var emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'emailInput');
emailLabel.textContent = 'E-mail';
//create email input
var emailInput = document.createElement('input');
emailInput.setAttribute('id', 'emailInput');
emailInput.setAttribute('type', 'email');
//create label for date input
var dateLabel = document.createElement('label');
dateLabel.setAttribute('for', 'dateInput');
dateLabel.textContent = 'Data';
//create date input
var dateInput = document.createElement('input');
dateInput.setAttribute('id', 'dateInput');
dateInput.setAttribute('type', 'datetime-local');
//create age input
var ageInput = document.createElement('input');
ageInput.setAttribute('name', 'ageInput');
ageInput.setAttribute('type', 'checkbox');
ageInput.textContent = 'Am peste 18 ani';
//create label for table input
var tableLabel = document.createElement('label');
tableLabel.setAttribute('for', 'tableInput');
tableLabel.textContent = 'Masa';
//create radio button as part of table input
var insideInput = document.createElement('input');
insideInput.setAttribute('name', 'tableInput');
insideInput.setAttribute('type', 'radio');
insideInput.textContent = 'Interior';
//create radio button as part of table input
var outsideInput = document.createElement('input');
outsideInput.setAttribute('name', 'tableInput');
outsideInput.setAttribute('type', 'radio');
outsideInput.textContent = 'Terasa';
//create label for remarks input
var obsLabel = document.createElement('label');
obsLabel.setAttribute('for', 'obsInput');
obsLabel.textContent = 'Observavtii:';
//create remarks input
var obsInput = document.createElement('input');
obsInput.setAttribute('id', 'obsInput');
obsInput.setAttribute('type', 'text');
//create label for number of seats input
var numberLabel = document.createElement('label');
numberLabel.setAttribute('for', 'numberInput');
numberLabel.textContent = 'Numar locuri';
//create number of seats input
var numberInput = document.createElement('input');
numberInput.setAttribute('id', 'numberInput');
numberInput.setAttribute('type', 'range');
numberInput.setAttribute('min', '1');
numberInput.setAttribute('max', '20');
//label that shows number of seats currently selected
var numberLabelRight = document.createElement('label');
numberLabelRight.setAttribute('for', 'numberInput');
numberLabelRight.textContent = '20';
//submit button
var submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'SUBMIT';

//append all inputs to formular
form.append(emailLabel);
form.append(document.createElement('br'));
form.append(emailInput);
form.append(document.createElement('br'));
form.append(dateLabel);
form.append(document.createElement('br'));
form.append(dateInput);
form.append(document.createElement('br'));
form.append(ageInput);
form.append(document.createTextNode('Am 18 ani'))
form.append(document.createElement('br'));
form.append(tableLabel);
form.append(document.createElement('br'));
form.append(insideInput);
form.append(document.createTextNode('Inauntru'));
form.append(document.createElement('br'));
form.append(outsideInput);
form.append(document.createTextNode('Pe terasa'));
form.append(document.createElement('br'));
form.append(obsLabel);
form.append(document.createElement('br'));
form.append(obsInput);
form.append(document.createElement('br'));
form.append(numberLabel);
form.append(document.createElement('br'));
form.append(numberInput);
form.append(numberLabelRight);
form.append(document.createElement('br'));
form.append(submitButton);
form.append(document.createElement('br'));
//append form to content
content.append(form);
//regex for email
const emailRegex = /^[a-zA-z0-9!#?$&_*^{}~-]+(\.[a-zA-z0-9!#?$&_*^{}~-]+)*@(([a-z0-9]+)\.)+([a-zA-Z]+)$/;

//label with number of seats must change in real time
numberInput.addEventListener('change', function () {
    numberLabelRight.textContent = numberInput.value;
});

//real time validation for email
emailInput.addEventListener('input',function () {
    if (emailRegex.test(emailInput.value)){
        emailInput.style.border = '4px solid green';
    }else{
        emailInput.style.border = '4px solid red';
    }
});

//submit the form
submitButton.addEventListener('click',function () {
    //check if email is valid, alert if not
    if (!emailRegex.test(emailInput.value)){
        // Swal.fire({
        //     title: 'Eroare!',
        //     text: 'Email invalid',
        //     icon: 'error',
        //     confirmButtonText: 'ok'
        // })

        alert('Eroare! Email invalid');
        return;
    }
    //make sure checkbox was clicked
    if (!ageInput.checked){
        // Swal.fire({
        //     title: 'Varsta',
        //     text: 'Trebuie sa ai cel putin 18 ani pentru a face o rezervare',
        //     icon: 'warning',
        //     confirmButtonText: 'Revin cand mai cresc'
        // });
        alert('Trebuie sa ai cel putin 18 ani pentru a face o rezervare');
        return;
    }
    //see which if a radio button was clicked and initialize loc variable with proper value
    var loc;
    if (insideInput.checked){
        loc = 'inauntru';
    }else {
        if (outsideInput.checked){
            loc = 'afara';
        }else{

            loc = 'nespecificat';
        }
    }
    //create text nodes with a summary of inputs
    var details = document.createElement('p');
    details.append(document.createTextNode("Datele rezervarii sunt:"));
    details.append(document.createElement('br'));
    details.append(document.createTextNode("E-mail: " + emailInput.value));
    details.append(document.createElement('br'));
    details.append(document.createTextNode("Data: " + dateInput.value));
    details.append(document.createElement('br'));
    details.append(document.createTextNode("Loc: " + loc));
    details.append(document.createElement('br'));
    details.append(document.createTextNode("Observatii: " + obsInput.value));
    details.append(document.createElement('br'));
    details.append(document.createTextNode("Numar locuri: " + numberInput.value));
    //remove form and append summary
    form.remove();
    content.append(details);

    //append text nodes with time left before page will be changed
    content.append(document.createElement('br'));
    var redir = document.createTextNode('Veti fi redirectionat catre pagina Contact in ')
    content.append(redir);

    var timeLeft = document.createElement('span');
    timeLeft .setAttribute('class', 'timeLeft')
    content.append(timeLeft);
    var sec = document.createTextNode(' secunde')
    content.append(sec);
    content.append(document.createElement('br'));
    //button to stop the counter
    var cancelButton = document.createElement('button');
    cancelButton.textContent = 'Opreste cronometrul';
    content.append(cancelButton);


    var timeout = setTimeout(function() {
        //go to Contact page
        location.href = '../html-pages/Contact.html';
    }, 10000);

    var timeleft = 10;
    //interval to decrease the counter
    var timerInt = setInterval(function() {
        r = Math.floor(Math.random()*255)
        g = Math.floor(Math.random()*255)
        b = Math.floor(Math.random()*255)

        cancelButton.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';


        timeLeft.textContent = timeleft
        timeleft -= 1;
    }, 1000);

    //event listener for cancel button so going to Contacts page will be made manually
    cancelButton.addEventListener('click',function () {
        //clear timeout
        clearTimeout(timeout);
        //remove messages that show how much time is left
        redir.remove();
        document.querySelector('.timeLeft').remove();
        // timeLeft.remove();
        sec.remove();
        clearInterval(timerInt);
        //remove cancel button
        cancelButton.remove();

        //append text node that says the counter was stopped
        content.append(document.createTextNode('Cronometru oprit'));
        content.append(document.createElement('br'));
        //appeng button that changes the page at click
        var goToRezervari = document.createElement('button');
        goToRezervari.textContent = 'Contact';
        goToRezervari.addEventListener('click',function () {
            location.href = '../html-pages/Contact.html';
        })
        content.append(goToRezervari);
    })

});

//submit button is pressed when Enter key is pressed
document.addEventListener('keydown',function (evt) {
    if (evt.key === 'Enter'){
        submitButton.click();
    }
})






