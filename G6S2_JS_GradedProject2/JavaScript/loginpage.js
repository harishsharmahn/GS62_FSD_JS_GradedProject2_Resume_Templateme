

function validateCredentials() {

    const username = document.getElementById('user-entered-value').value;
    const password = document.getElementById('password-entered').value;
    window.localStorage.setItem('Harish', username);
    window.localStorage.setItem('gl@2023', password);


    function checkAndMatch() {
        if (username === 'Harish' && password === 'gl@2023') {
            window.location = 'candidateResumes.html';
        } else {
            document.getElementById('user-entered-value').value = ''
            document.getElementById('password-entered').value = '';
            document.getElementById('invalid-scenario').style.display = 'block';
        };
    }
    checkAndMatch();

}

window.history.forward();
function noBack() {
    window.history.forward();
}
noBack();