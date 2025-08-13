const togglepassword=document.getElementById('togglepassword');
const password=document.getElementById('password');

togglepassword.addEventListener('click',
    ()=> {
        const type= password.getAttribute('type')===
        'password'?'text':'password';
        password.setAttribute('type',type);
        togglepassword.textContent=type==='password'?'👁':'😣';
    }
);
