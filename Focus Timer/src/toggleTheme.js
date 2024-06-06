let btnDarkMode = document.querySelector('.btnDarkMode');

btnDarkMode.addEventListener('click', ()=>
    document.documentElement.classList.toggle('light')
);