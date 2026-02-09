const form = document.querySelector('form'); 
const submit = document.querySelector('submit') as HTMLInputElement;
const email = document.querySelector('.email'); 
const password = document.querySelector('password');
const password2 = document.querySelector('password2');

submit.addEventListener('submit', function (event) {
    event.preventDefault();
});

function showErrorMessage (element: HTMLElement, msg: string) {

};




