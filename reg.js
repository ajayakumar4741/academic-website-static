const regp = /^[a-z0-9]{6,15}$/;
const rege = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
function email(){
    let em = document.querySelector('#reg-email').value
    const spem = document.querySelector('#span-reg-email')
    if(!rege.test(em)){
        spem.textContent = 'Enter valid mail id'
        spem.style.color = 'red'
    }else{
        spem.textContent = 'good'
        spem.style.color = 'green'
    }
}

function password(){
    let ps = document.querySelector('#password').value
    const spps = document.querySelector('#span_password')
    if(!regp.test(ps)){
        spps.textContent = 'Password not strong'
        spps.style.color = 'red'
    }else{
        spps.textContent = 'good'
        spps.style.color = 'green'
    }
}

function confirm_password(){
    let cps = document.querySelector('#confirm-password').value
    const scps = document.querySelector('#span-confirm_password')
    if(cps === ps){
        scps.textContent = 'Matching'
        scps.style.color = 'green'
    }else{
        scps.textContent = 'Password not matching'
        scps.style.color = 'red'
    }
}

function regbutt(e){
    e.preventDefault()
    let cps = document.querySelector('#confirm-password').value
    let ps = document.querySelector('#password').value
    let em = document.querySelector('#reg-email').value
    const result = document.querySelector('#result')

    if(ps === cps && rege.test(em) && regp.test(ps) && regp.test(cps)){
        result.textContent = 'Registered Successfully'
        result.style.color = 'green'
    }else{
        result.textContent = 'Registered Unsuccessfully please check the errors'
        result.style.color = 'red'
    }
}

document.querySelector('#reg-email').addEventListener('change',email)
document.querySelector('#password').addEventListener('change',password)
document.querySelector('#confirm-password').addEventListener('change',confirm_password)
document.querySelector('#reg-form').addEventListener('submit',regbutt)