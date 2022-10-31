//alert("Benvenuto");

function init(){
    google.accounts.id.initialize({
        client_id:"785202406284-1fl4f0hilelkh96s5ugtk75oo1om634g.apps.googleusercontent.com",
        callback: loginEffettuato
    });
    
    let btn = document.getElementById("btnLogin");

    //Cambia l'aspetto del bottone
    google.accounts.id.renderButton(btn, 
            {theme:"outline"});

    //Richiede a google se l'utente è già loggato su questo browser
    google.accounts.id.prompt();
}

function loginEffettuato(data){
    console.log(parseJwt(data.credential));
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64)
    .split('').map(function(c) {
    return '%' + ('00' +
    c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}