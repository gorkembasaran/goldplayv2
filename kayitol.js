document.querySelector(".sign-btn2").addEventListener("click", function(){
    for(i=0; i<data.length; i++){
        if(emailInput.value == data[i].email || usernameInput.value == data[i].username || numberInput.value == data[i].number){
            anlam+=1;
        }
    }
    if(nameInput.value == "" || surnameInput.value == "" || emailInput.value == "" || usernameInput.value == "" || numberInput.value == "" || passwordInput.value == ""){
        alert("Boş yer bırakmamalısınız!")
    }
    else if(anlam>0){
        let tag31 = "Girdiğiniz bilgilere ait bir hesap bulunuyor lütfen kontrol edip tekrar deneyiniz!"
        document.querySelector(".alert").innerHTML = tag31;
    }
    else if(emailInput.value.indexOf("@") === -1){
        let tag32 = "Gerçek bir mail adresi giriniz!"
        document.querySelector(".alert").innerHTML = tag32;
    }
    else{
        kullanicilar.push({"name": nameInput.value,"surname":surnameInput.value,"email":emailInput.value,"username": usernameInput.value,"number":numberInput.value , "password" : passwordInput.value, "bakiye": 0});
        window.localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar))
        window.location.href = "login.html"
    }
})