function startapp () {

    let username = document.getElementById("username").value ;
    let password = document.getElementById("password").value ;
    let phonenum = document.getElementById("phonenum").value ;
    let error = document.getElementById("error") ;
    

    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    localStorage.setItem("phonenum",phonenum);
    localStorage.setItem("error",error);

    if (username === "") {
        error.textContent = "enter the username" ;
        return ;
    }
    if (password === "") {
        error.textContent = "enter the password" ;
        return ;
    }
    if (phonenum === "") {
        error.textContent = "enter the phone number" ;
        return ;
    }
    if (phonenum.length < 11) {
        error.textContent = "the phone number is less than 11" ;
        return ;
    }

   window.location.href = "home.html"
   
    
}