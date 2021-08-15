document.getElementById("submit").addEventListener("click",function(){

    let emailBtn = document.getElementById("email");

    let emailSubmit = emailBtn.value;
    console.log(emailSubmit);
    // password
    let passwordBtn = document.getElementById("password")
    let passwordSubmit = passwordBtn.value;
    // condition
    if(emailSubmit == "nurmdopu428@gmail.com" && passwordSubmit == "opuvai"){

        window.location.href = "main.html"
        alert("congrats password matched")
    }
    else if( passwordSubmit != "opuvai"){

        alert("eneter valid username and password")
    }
})