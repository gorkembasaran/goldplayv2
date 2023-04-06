console.log(JSON.parse(localStorage.getItem("kullanicilar")));
kullanicilar = JSON.parse(localStorage.getItem("kullanicilar"));
console.log(kullanicilar)
console.log(document.querySelector("#setname").value)
console.log(document.querySelector("#setsurname").value)
console.log((document.querySelector("#setusername")).value)
console.log((document.querySelector("#setcode")).value)
console.log((document.querySelector("#settel")).value)
console.log((document.querySelector("#setemail")).value)
console.log((document.querySelector("#lastpass")).value)
console.log((document.querySelector("#newpass")).value)
console.log((document.querySelector("#renewpass")).value)
console.log(JSON.parse(localStorage.getItem("accountNumber")))

console.log(kullanicilar[JSON.parse(localStorage.getItem("accountNumber"))])
console.log(kullanicilar[JSON.parse(localStorage.getItem("accountNumber"))])
console.log(JSON.parse(JSON.stringify(localStorage.getItem("accountPassword"))))
console.log(JSON.parse(JSON.stringify(localStorage.getItem("accountCase"))))


document.querySelector(".formbtn2").addEventListener("click", function(){
    if(document.querySelector("#setname").value==""||document.querySelector("#setsurname").value==""||(document.querySelector("#settel")).value=="" ){
        alert("Bilgilerinizi güncellemek için boş alanların tamamını doldurmalısınız!")
    }
    else{
        kullanicilar.splice(JSON.parse(localStorage.getItem("accountNumber")),1,{
            name : document.querySelector("#setname").value,
            surname : document.querySelector("#setsurname").value,
            email : (document.querySelector("#setemail")).value,
            username : (document.querySelector("#setusername")).value,
            telno: document.querySelector("#settel").value,
            password : JSON.parse(JSON.stringify(localStorage.getItem("accountPassword"))),
            bakiye : JSON.parse(JSON.stringify(localStorage.getItem("accountCase"))),
            number : JSON.parse(JSON.stringify(localStorage.getItem("accountCode")))
        })
        window.localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar))
        localStorage.setItem("accountName", `${document.querySelector("#setname").value}`);
        localStorage.setItem("accountSurname", `${document.querySelector("#setsurname").value}`);
        localStorage.setItem("accountUsername", `${document.querySelector("#setusername").value}`);
        localStorage.setItem("accountTelno", `${document.querySelector("#settel").value}`);
        window.location.reload(false)
    }
})
document.querySelector(".formbtn3").addEventListener("click", function(){
    if(document.querySelector("#lastpass").value===""||document.querySelector("#newpass").value===""||document.querySelector("#renewpass").value===""){
        alert("Parolanızda değişiklik istiyorsanız boş alan bırakmamalısınız!")
    }else if(document.querySelector("#lastpass").value!==JSON.parse(JSON.stringify(localStorage.getItem("accountPassword")))){
        alert("Eski parolanızı yanlış giriyorsunuz!")
    }else if(document.querySelector("#newpass").value!==document.querySelector("#renewpass").value){
        alert("Yeni şifreniz birbiriyle eşleşmiyor lütfen kontrol ediniz!")
    }else {
        kullanicilar.splice(JSON.parse(localStorage.getItem("accountNumber")),1,{
            name : JSON.parse(JSON.stringify(localStorage.getItem("accountName"))),
            surname : JSON.parse(JSON.stringify(localStorage.getItem("accountSurname"))),
            email : JSON.parse(JSON.stringify(localStorage.getItem("accountEmail"))),
            username : JSON.parse(JSON.stringify(localStorage.getItem("accountUsername"))),
            telno: JSON.parse(JSON.stringify(localStorage.getItem("accountTelno"))),
            password : document.querySelector("#newpass").value,
            bakiye : JSON.parse(JSON.stringify(localStorage.getItem("accountCase"))),
            number : JSON.parse(JSON.stringify(localStorage.getItem("accountCode")))
        })
        window.localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar))
        localStorage.setItem("accountPassword", `${document.querySelector("#newpass").value}`);
        window.location.reload(false)
    }
})

