var Name = document.getElementById('name')
var email = document.getElementById('email')
var pass = document.getElementById('pass')
var usersList = JSON.parse(localStorage.getItem('users')) || []
var Regex = /^[\w\d.]+@[\w]+\.[\w]{2,}$/
var logbtn = document.getElementById('logbtn')
var signbtn = document.getElementById('signbtn')
var sign = document.getElementById('sign')
var logn = document.getElementById('logn')
var successP = document.getElementById('suc')
var validP = document.getElementById('valid')
var check = document.getElementById('check')
var home = document.getElementById('home')
var wel= document.getElementById('wel')
var eye= document.getElementById('eye')
var out= document.getElementById('out')
var outbtn=document.getElementById('outbtn')
function getUsers() {
    validP.classList.replace('d-block', 'd-none')
    if (validation(email.value) && emailExist(email.value)&&Name.value&&pass.value) {
        var user = {
            name: Name.value,
            email: email.value,
            pass: pass.value
        }
        usersList.push(user)
        localStorage.setItem('users', JSON.stringify(usersList))
        successP.classList.replace('d-none', 'd-block')
    } else if (!validation(email.value)) {
        validP.innerHTML = 'Please enter valid email'
        validP.classList.replace('d-none', 'd-block')
    } else if (!emailExist(email.value)) {
        validP.innerHTML = 'Email already exists'
        validP.classList.replace('d-none', 'd-block')
    }
}

function validation(mail) {
    return Regex.test(mail)
}

function Home() {
    validP.classList.replace('d-block', 'd-none')
    if (checkExist()) {
        home.classList.replace('d-none', 'd-block')
        check.classList.replace('d-block', 'd-none')
        out.classList.replace('d-none', 'd-block')
    } else {
        if (!emailExist(email.value)) {
            validP.innerHTML = 'Wrong password'
            validP.classList.replace('d-none', 'd-block')
        } else {
            validP.innerHTML = 'Wrong email or password'
            validP.classList.replace('d-none', 'd-block')
        }
    }
}

function checkExist() {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].pass === pass.value && usersList[i].email === email.value) {
            wel.innerHTML=`Welcome ${usersList[i].name}`
            return true
        }
    }
    return false
}

function emailExist(mail) {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email === mail) {
            return false
        }
    }
    return true
}

function replaceup() {
    Name.classList.replace('d-none', 'd-block')
    logbtn.classList.add('d-none')
    signbtn.classList.replace('d-none', 'd-block')
    sign.classList.add('d-none')
    logn.classList.replace('d-none', 'd-block')
    clear()
}

function replacein() {
    successP.classList.replace('d-block', 'd-none')
    Name.classList.replace('d-block', 'd-none')
    logbtn.classList.replace('d-none', 'd-block')
    signbtn.classList.replace('d-block', 'd-none')
    logn.classList.replace('d-block', 'd-none')
    sign.classList.replace('d-none', 'd-block')
    clear()
}
function showeye(){
    eye.classList.replace('d-none', 'd-block')
}
function toggle(){
    if(pass.type=="password")
    {
        pass.type="text"
    }
    else{
        pass.type="password"  
    }
}
outbtn.addEventListener('click',function(){
    check.classList.replace('d-none', 'd-block')
        home.classList.replace('d-block', 'd-none')
        out.classList.replace('d-block', 'd-none')
})
function clear(){
    Name.value=null
    pass.value=null
    email.value=null
    
}