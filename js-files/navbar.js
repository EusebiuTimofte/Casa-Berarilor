var loginCell = document.getElementById('login-info');

//check if local storage contains an username element
if ( ! (typeof localStorage.getItem('username') === "undefined" || localStorage.getItem('username') === ''||
        localStorage.getItem('username') == null)){
    //remove Login text
    loginCell.firstElementChild.remove();
    //create text note with username from local storage and append it to table cell
    var usernameText = document.createTextNode(localStorage.getItem('username'));
    loginCell.append(usernameText);
    loginCell.append(document.createElement('br'));
    //create span element which performs logout on click
    var disconnect = document.createElement('span');
    disconnect.textContent = 'Deconecteaza-te';
    disconnect.addEventListener('click', function () {
        localStorage.clear();
        location.reload();
    })
    disconnect.style.fontSize = '1vw';

    loginCell.append(disconnect);

}