var content = document.querySelector('body');
//create form
var form = document.createElement('form');
//create label for username input
var usernameLabel = document.createElement('label');
usernameLabel.setAttribute('for', 'usernameInput');
usernameLabel.textContent = 'Username:';
//create username input
var usernameInput = document.createElement('input');
usernameInput.setAttribute('id', 'usernameInput');
usernameInput.setAttribute('type', 'text');
//create label for password input
var passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'passwordInput');
passwordLabel.textContent = 'Password:';
//create password input
var passwordInput = document.createElement('input');
passwordInput.setAttribute('id', 'passwordInput');
passwordInput.setAttribute('type', 'password');
//create submit button
var submitButton = document.createElement('button');
submitButton.textContent = 'Login';

//append inputs to form
form.append(usernameLabel);
form.append(document.createElement('br'));
form.append(usernameInput);
form.append(document.createElement('br'));
form.append(passwordLabel);
form.append(document.createElement('br'));
form.append(passwordInput);
form.append(document.createElement('br'));
//append form to content
content.append(form)

content.append(document.createElement('br'));
//append submit button to content
content.append(submitButton);


//Formular object constructor
function Formular(username, password){
    this.username = username;
    this.password = password;
    this.usernameRegex = /^[a-zA-Z][a-zA-z0-9]{7,}$/;
    this.passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*{}-])[a-zA-Z0-9~!@#$%^&*{}-]{6,}$/;
    this.submit = function () {
        //check that username is valid
        if (this.username === '' || !this.usernameRegex.test(this.username)){
            alert('Username invalid');
            return;
        }else{
            //it's valid, save it on local storage
            localStorage.setItem('username', this.username);
        }
        //check that password is valid
        if (this.password === '' || !this.passwordRegex.test(this.password)){
            localStorage.setItem('username', '');
            alert('Parola invalida');
            return;
        }else{
            //password is valid, save it on local storage
            localStorage.setItem('password', this.password);
        }
        //go to DespreNoi.html page
        location.href = './../index.html';
    }
}
//create Formular object
formular = new Formular('', '');

submitButton.addEventListener('click',function () {
    //when submit button is pressed, save login data ,check if it is valid and save it on local storage if it's the case
    formular['username'] = usernameInput.value;
    formular['password'] = passwordInput.value;
    formular.submit();
});

document.addEventListener('keydown',function (evt) {
    //when enter is pressed, perfom click on submit button
    if (evt.key === 'Enter'){
        submitButton.click();
    }
})

//change username input border color on real time, depending on whether it is valid or not.
usernameInput.addEventListener('input',function () {
    if (formular.usernameRegex.test(usernameInput.value)){
        usernameInput.style.border = '4px solid green';
    }else{
        usernameInput.style.border = '4px solid red';
    }
});

