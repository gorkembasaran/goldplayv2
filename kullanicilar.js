let nameInput = document.querySelector("#name")
let surnameInput = document.querySelector("#surname")
let emailInput = document.querySelector("#email")
let usernameInput = document.querySelector("#username")
let numberInput = document.querySelector("#number")
let passwordInput = document.querySelector("#password")
let data = JSON.parse(window.localStorage.getItem("kullanicilar"))
var anlam = 0;
let kullanicilar = [{
    name : "Görkem",
    username : "Başaran",
    email : "admin",
    username : "admin",
    password : "1",
    bakiye : 9999,
    number : 0
}]
kullanicilar = JSON.parse(window.localStorage.getItem("kullanicilar"))
console.log(JSON.parse(window.localStorage.getItem("kullanicilar")))
