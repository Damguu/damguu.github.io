

// Redirect to Bobot in Figma
let prototype_btn = document.querySelector('#viewPrototype');

prototype_btn.addEventListener('click', () =>{
    window.open('https://www.figma.com/proto/QChP4CrYO7L5SP55hwKHGp/Bo-bot?node-id=119%3A67&scaling=scale-down&page-id=0%3A1&starting-point-node-id=119%3A67');
})


let dbLink = document.querySelectorAll('.btn')[1];
let sqlLink = document.querySelectorAll('.btn')[2];

dbLink.addEventListener('click', () =>{
    window.open('https://www.db-fiddle.com/f/7drZGigaYxaCF7RqeTMeJo/17');
});

sqlLink.addEventListener('click', () =>{
    window.open('http://sqlfiddle.com/#!9/fc26a7/9');
});