const regp = /^[a-z0-9]{6,15}$/;
const rege = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

function logmail(){
    let ema = document.querySelector('#login_email').value
    const spm = document.querySelector('#span-log-email')
    if(!rege.test(ema)){
        spm.textContent = 'Invalid email'
        spm.style.color = 'red'
    }else{
        spm.textContent = 'Ok'
        spm.style.color = 'green'
    }
}

function password(){
    let lps = document.querySelector('#log-password').value
    const lsps = document.querySelector('#span_password')

    if(!regp.test(lps)){
        lsps.textContent = 'Invalid Password'
        lsps.style.color = 'red'
    }else{
        lsps.textContent = 'good'
        lsps.style.color = 'green'
    }
}

function logbutt(e){
    e.preventDefault()
    let lps = document.querySelector('#log-password').value
    let ema = document.querySelector('#login_email').value
    const lresult = document.querySelector('#log-result')
    if(rege.test(ema) && regp.test(lps)){
        lresult.textContent = 'Logged Successfully'
        lresult.style.color = 'green'
    }else{
        lresult.textContent = 'Login Failed'
        lresult.style.color = 'red'
    }
}

document.querySelector('#login_email').addEventListener('change',logmail)
document.querySelector('#log-password').addEventListener('change',password)
document.querySelector('#log-form').addEventListener('submit',logbutt)