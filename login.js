document.querySelector(".login-btn").addEventListener("click", function(){
    for(i=0; i<JSON.parse(localStorage.getItem("kullanicilar")).length; i++){
        if(document.querySelector("#login-email").value===JSON.parse(localStorage.getItem("kullanicilar"))[i].email &&document.querySelector("#login-password").value == JSON.parse(window.localStorage.getItem("kullanicilar"))[i].password ) {
            localStorage.setItem("accountStatus", true);
            console.log("giriş yapıldı");
            location.href = "index.html";
            localStorage.setItem("accountNumber", `${i}`);
            localStorage.setItem("accountName", `${JSON.parse(localStorage.getItem("kullanicilar"))[i].name}`);
            localStorage.setItem("accountSurname", `${JSON.parse(localStorage.getItem("kullanicilar"))[i].surname}`);
            localStorage.setItem("accountEmail", `${JSON.parse(localStorage.getItem("kullanicilar"))[i].email}`);
            localStorage.setItem("accountUsername", `${JSON.parse(localStorage.getItem("kullanicilar"))[i].username}`);
            localStorage.setItem("accountPassword", `${JSON.parse(localStorage.getItem("kullanicilar"))[i].password}`);
            localStorage.setItem("accountCode", `${JSON.parse(localStorage.getItem("kullanicilar"))[i].number}`);
            localStorage.setItem("accountCase", `${JSON.parse(localStorage.getItem("kullanicilar"))[i].bakiye}`);
        }else if(document.querySelector("#login-email").value === "" || document.querySelector("#login-password").value=== "" ){
            location.href = "login.html"
        }else{
            let tag29 = `Girdiğiniz bilgileri kontrol edip tekrar deneyiniz!`
            document.querySelector(".alert33").innerHTML = tag29
        }
    }
})