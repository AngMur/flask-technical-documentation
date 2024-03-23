let headings = document.querySelectorAll('.section-title');
let navlist = document.getElementById('navlist');


navlist.innerHTML = "";
let index = 1;

headings.forEach((item) => {
    navlist.innerHTML += `<li class="nav-item"><a href="#Section_${index}" class="nav-link">${item.innerText}</a></li>`; 
    index++;
});

